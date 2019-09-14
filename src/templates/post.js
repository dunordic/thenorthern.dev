import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import { kebabCase } from 'lodash';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import {
  Layout,
  // SEO,
  // PrevNext
} from '../components';
import config from '../../config';

// const Content = styled.article;

// const Title = styled.h1`
//   margin-bottom: 1rem;
// `;

// const PostContent = styled.div`
//   margin-top: 4rem;
// `;

const Post = ({
  pageContext: { slug, prev, next },
  data: { mdx: postNode },
}) => {
  const post = postNode.frontmatter;

  return (
    <Layout customSEO>
      <MDXRenderer>{postNode.body}</MDXRenderer>
      {/* <Wrapper>
        <SEO postPath={slug} postNode={postNode} article />
        <Header>
          <Link to="/">{config.siteTitle}</Link>
        </Header>
        <Content>
          <Title>{post.title}</Title>
          <Subline>
            {post.date} &mdash; {postNode.timeToRead} Min Read &mdash; In{' '}
            {post.categories.map((cat, i) => (
              <React.Fragment key={cat}>
                {!!i && ', '}
                <Link to={`/categories/${kebabCase(cat)}`}>{cat}</Link>
              </React.Fragment>
            ))}
          </Subline>
          <PostContent>
            <MDXRenderer>{postNode.body}</MDXRenderer>
          </PostContent>
          <PrevNext prev={prev} next={next} />
        </Content>
      </Wrapper> */}
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object,
  }),
  data: PropTypes.shape({
    mdx: PropTypes.object.isRequired,
  }).isRequired,
};

Post.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
};

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        title
        date(formatString: "MM/DD/YYYY")
        categories
      }
      timeToRead
      parent {
        ... on File {
          mtime
          birthtime
        }
      }
    }
  }
`;
