import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { styled } from 'linaria/react'
import Image from 'gatsby-image'

// {
//   marginRight: 'calc(var(--spacing) *0.5)',
//   marginBottom: 0,
//   minWidth: 50,
//   borderRadius: `50%`,
// }

const StyledImage = styled(Image)`
  margin-right: calc(var(--spacing) * 0.5);
  margin-bottom: 0;
  min-width: calc(var(--spacing) * 4);
  border-radius: 50%;
`

const Container = styled.div`
  display: flex;
  margin-bottom: var(--spacing);
`

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

const Bio = () => {
  const data = useStaticQuery(query)
  const { author, social } = data.site.siteMetadata

  return (
    <Container>
      <StyledImage fixed={data.avatar.childImageSharp.fixed} alt={author} />
      <p>
        Written by <strong>{author}</strong>.{' '}
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter
        </a>
      </p>
    </Container>
  )
}

export default Bio
