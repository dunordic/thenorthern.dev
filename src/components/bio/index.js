import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'

const query = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

const Bio = () => (
  <StaticQuery
    query={query}
    render={data => {
      const { author, social } = data.site.siteMetadata
      return (
        <div
          style={{
            display: `flex`,
            marginBottom: 'var(--spacing)',
          }}
        >
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{
              marginRight: 'calc(var(--spacing) *0.5)',
              marginBottom: 0,
              minWidth: 50,
              borderRadius: `50%`,
            }}
          />
          <p>
            Written by <strong>{author}</strong>.
            <a href={`https://twitter.com/${social.twitter}`}>
              You should follow him on Twitter
            </a>
          </p>
        </div>
      )
    }}
  />
)

export default Bio
