import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import path from 'ramda/src/path'
import pick from 'ramda/src/pick'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Bio from '../components/bio'
import Layout from '../components/layout'
import Seo from '../components/seo'

const BlogPostTemplate = props => {
  const post = path(['data', 'mdx'], props)
  const siteTitle = path(['data', 'site', 'siteMetadata', 'title'], props)
  const { previous, next } = pick('pageContext', props)

  return (
    <Layout title={siteTitle}>
      <Seo title={post.frontmatter.title} description={post.excerpt} />
      <h1>{post.frontmatter.title}</h1>
      <p
        style={{
          display: `block`,
          marginBottom: 'calc(var(--spacing) *1)',
          marginTop: 'calc(var(--spacing) *-1)',
        }}
      >
        {post.frontmatter.date}
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <hr
        style={{
          marginBottom: 'calc(var(--spacing) *1)',
        }}
      />
      <Bio />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  )
}

const frontmatter = PropTypes.shape({
  excerpt: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
})

BlogPostTemplate.propTypes = {
  pageContext: PropTypes.shape({
    next: PropTypes.shape({
      frontmatter,
    }),
  }),
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter,
    }),
  }),
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`
