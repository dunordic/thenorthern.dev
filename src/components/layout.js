import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from 'linaria'
import { normalize, modularScale } from 'polished'
import Montserrat from '../fonts/Montserrat-VF.ttf'
import FiraCode from '../fonts/FiraCode-VF.ttf'
import LoraTTF from '../fonts/Lora-VF.ttf'
import LoraWoff from '../fonts/Lora-VF.woff2'
import LoraItalicTTF from '../fonts/Lora-Italic-VF.ttf'
import LoraItalicWoff from '../fonts/Lora-Italic-VF.woff2'

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
      font-family: FiraCode;
      font-style: normal;
      src: url(${FiraCode}) format('truetype');
    }

    @font-face {
      font-family: Lora;
      font-style: normal;
      src: url(${LoraTTF}) format('truetype');
      src: url(${LoraWoff}) format('woff2');
    }

    @font-face {
      font-family: Lora;
      font-style: oblique;
      src: url(${LoraItalicTTF}) format('truetype');
      src: url(${LoraItalicWoff}) format('woff2');
    }

    :root {
      --spacing: ${modularScale(1, '1em', 0.5)};
      --font-family-mono: FiraCode;
      --font-family-sans: Montserrat;
      --font-family-serif: Lora;
      --font-weight-normal: 'wght' 400;
      --font-weight-light: 'wght' 300;
      --font-weight-thing: 'wght' 200;
      --font-weight-medium: 'wght' 500;
      --font-weight-demi-bold: 'wght' 600;
      --font-weight-bold: 'wght' 700;
      --font-weight-extra-bold: 'wght' 800;
      --font-weight-black: 'wght' 900;
      --color-primary: hsl(0, 0%, 5%);
      --color-dark: hsl(0, 0%, 35%);
      --color-text-primary: hsl(0, 0%, 75%);
      --color-light: hsl(0, 0%, 95%);
      --color-blue: hsl(198, 68%, 85%);
      --color-pink: hsl(332, 100%, 80%);
    }

    body {
      font-family: var(--font-family-serif);
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

    ::-moz-selection,
    ::selection {
      background: var(--color-blue);
      color: var(--color-primary);
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
      font-family: var(--font-family-sans);
    }

    a {
      color: inherit;
      background-color: transparent;
      text-decoration-color: var(--color-pink);
      text-decoration-thickness: calc(var(--spacing) * 0.2);
      text-underline-offset: calc(var(--spacing) * 0.4);
      text-decoration-skip-ink: none;
      transition: color 250ms, background-color 250ms;
      &:hover {
        color: var(--color-primary);
        background-color: var(--color-pink);
      }
    }

    pre,
    code {
      font-family: var(--font-family-mono);
    }
    :not(pre) > code {
      color: var(--color-pink);
      padding: calc(var(--spacing) * 0.5);
      background-color: var(--color-dark);
      font-size: calc(var(--spacing) * 1.66);
    }

    p {
      margin: var(--spacing) 0;
    }

    pre {
      font-family: var(--font-family-mono) !important;
      font-size: calc(var(--spacing) * 1.75) !important;
      padding: calc(var(--spacing) * 2);
    }

    blockquote {
      margin-left: calc(var(--spacing) * 3);
      border-left: var(--spacing) solid var(--color-blue);
      padding: var(--spacing) var(--spacing) var(--spacing)
        calc(var(--spacing) * 3);
      & > *:first-child {
        margin-top: 0;
      }
      & > *:last-child {
        margin-bottom: 0;
      }
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
      <footer
        className={css`
          text-align: right;
        `}
      >
        <small>&copy; {new Date().getFullYear()} Henry C. Andre</small>
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
