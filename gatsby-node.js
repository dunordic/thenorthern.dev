const kebabCase = require('lodash.kebabcase');
const delve = require('dlv');

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  let slug;

  if (node.internal.type === 'Mdx') {
    if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')
    ) {
      slug = `/${kebabCase(node.frontmatter.slug)}`;
    } else if (
      Object.prototype.hasOwnProperty.call(node, 'frontmatter') &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')
    ) {
      slug = `/${kebabCase(node.frontmatter.title)}`;
    }
    createNodeField({ node, name: 'slug', value: slug });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = require.resolve('./src/templates/post.js');
  const categoryTemplate = require.resolve('./src/templates/category.js');

  const result = await graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
            categories
          }
        }
      }
    }
  `);

  const posts = result.data.allMdx.nodes;

  posts.forEach((n, index) => {
    const next = index === 0 ? null : posts[index - 1];
    const prev = index === posts.length - 1 ? null : posts[index + 1];

    createPage({
      path: n.fields.slug,
      component: postTemplate,
      context: {
        slug: n.fields.slug,
        prev,
        next,
      },
    });
  });

  const categorySet = posts.reduce((acc, post) => {
    const categories = delve(post, 'frontmatter.categories');
    if (categories && Array.isArray(categories))
      categories.forEach(acc.add.bind(acc));
    return acc;
  }, new Set());

  const categories = Array.from(categorySet);

  categories.forEach(category => {
    createPage({
      path: `/categories/${kebabCase(category)}`,
      component: categoryTemplate,
      context: {
        category,
      },
    });
  });
};
