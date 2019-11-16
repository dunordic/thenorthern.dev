import React from 'react'
import { Link, graphql } from 'gatsby'
import path from 'ramda/src/path'
import Bio from '../components/bio'
import Layout from '../components/layout'
import Seo from '../components/seo'

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

const BlogIndex = props => {
  const siteTitle = path(['data', 'site', 'siteMetadata', 'title'], props)
  const posts = path(['data', 'allMdx', 'edges'], props)
  return (
    <Layout isHomepage title={siteTitle}>
      <Seo
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <h3
              style={{
                marginBottom: 0,
              }}
            >
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: node.excerpt }}
            />
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex
