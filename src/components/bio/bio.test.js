import React from 'react'
import { useStaticQuery } from 'gatsby'
import { render } from '@testing-library/react'
import Bio from '.'

test('Tests work', () => {
  useStaticQuery.mockReturnValue({
    avatar: { childImageSharp: { fixed: 'mock avatar image' } },
    site: {
      siteMetadata: { author: 'Hank Andre', social: { twitter: 'hankandre' } },
    },
  })
  const { container } = render(<Bio />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div
      class="c1gu2z4z"
    >
      <div
        class="soh6puz gatsby-image-wrapper"
        style="position: relative; overflow: hidden; display: inline-block;"
      >
        <picture>
          <source />
          <img
            alt="Hank Andre"
            loading="lazy"
            style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; object-fit: cover; object-position: center; opacity: 0; transition: opacity 500ms;"
          />
        </picture>
        <noscript>
          &lt;picture&gt;&lt;source srcset="undefined" /&gt;&lt;img loading="lazy" src="" alt="Hank Andre" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/&gt;&lt;/picture&gt;
        </noscript>
      </div>
      <p>
        Written by 
        <strong>
          Hank Andre
        </strong>
        .
         
        <a
          href="https://twitter.com/hankandre"
        >
          You should follow him on Twitter
        </a>
      </p>
    </div>
  `)
})
