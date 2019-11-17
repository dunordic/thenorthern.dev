import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from 'linaria'
import { normalize, modularScale } from 'polished'
import Montserrat from '../fonts/Montserrat-VF.ttf'
import SourceCodeVariable from '../fonts/SourceCodeVariable-Roman.ttf'
import Hepta from '../fonts/HeptaSlab-VF.ttf'

// /* Color Theme Swatches in HSLA */
// .Graphic-Design-1-hsla { color: hsla(0, 0, 95, 1); }
// .Graphic-Design-2-hsla { color: hsla(0, 0, 75, 1); }
// .Graphic-Design-3-hsla { color: hsla(0, 0, 55, 1); }
// .Graphic-Design-4-hsla { color: hsla(0, 0, 35, 1); }
// .Graphic-Design-5-hsla { color: hsla(0, 0, 5, 1); }

const container = css`
  :global() {
    ${normalize()};
    @font-face {
      font-family: Montserrat;
      font-style: normal;
      src: url(${Montserrat}) format('truetype');
    }

    @font-face {
      font-family: SourceCode;
      font-style: normal;
      src: url(${SourceCodeVariable}) format('truetype');
    }

    @font-face {
      font-family: Hepta;
      src: url(${Hepta}) format('truetype');
    }

    :root {
      --spacing: ${modularScale(1, '1em', 0.5)};
      --font-face-mono: SourceCode;
      --font-face-sans: Montserrat;
      --font-face-serif: Hepta;
      --font-weight-normal: 'wght' 400;
      --font-weight-light: 'wght' 300;
      --font-weight-thing: 'wght' 200;
      --font-weight-medium: 'wght' 500;
      --font-weight-demi-bold: 'wght' 600;
      --font-weight-bold: 'wght' 700;
      --font-weight-extra-bold: 'wght' 800;
      --font-weight-black: 'wght' 900;
      --color-primary: hsl(0, 0%, 5%);
      --color-text-primary: hsl(0, 0%, 75%);
      --color-light: hsl(0, 0%, 95%);
    }

    body {
      font-family: var(--font-face-serif);
      font-variation-settings: 'wght' 400;
      font-size: 16px;
      box-sizing: border-box;
      line-height: 1.5;
      background: var(--color-primary);
      color: var(--color-text-primary);
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-variation-settings: 'wght' 700;
    }
    h1,
    h2,
    h3 {
      font-family: var(--font-face-sans);
    }

    a {
      font-family: var(--font-face-mono);
      color: hsl(198, 68%, 85%);
      background-color: transparent;
      text-decoration-thickness: calc(var(--spacing) * 0.2);
      text-underline-offset: calc(var(--spacing) * 0.4);
      text-decoration-skip-ink: none;
      transition: color 250ms, background-color 250ms;
      &:hover {
        color: var(--color-primary);
        background-color: hsl(198, 68%, 85%);
      }
    }

    p {
      margin: var(--spacing) 0;
    }
    pre {
      padding: calc(var(--spacing) * 2);
      font-size: calc(var(--spacing) * 1.75);
    }
  }
  margin: 0 auto;
  max-width: 60ch;
  padding: calc(var(--spacing) * 1.5) calc(var(--spacing) * 0.75);
`

const link = css`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`

const Layout = props => {
  const { isHomepage, title, children } = props
  return (
    <div className={container}>
      {React.createElement(
        isHomepage ? 'h1' : 'h3',
        {
          style: {
            marginBottom: `calc(var(--spacing) * ${isHomepage ? 0.75 : 0.5})`,
            marginTop: 0,
          },
        },
        <Link className={link} to="/">
          {title}
        </Link>
      )}
      {children}
      <footer>
        &copy; {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  isHomepage: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Layout
