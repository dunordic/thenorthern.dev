import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import kebabCase from 'lodash.kebabcase';
import { css, Global } from '@emotion/core';
import {
  colors,
  transitions,
  breakpoints,
  fontSize,
  fontFamily,
} from '../../config/theme';
import useBuildTime from '../hooks/useBuildTime';
import Seo from './SEO';

const generateStyles = (obj, name) =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => `${acc}--${kebabCase(`${name}-${key}`)}: ${value};`,
    ''
  );

const globalStyles = css`
  @font-face {
    font-family: 'League Spartan VF';
    src: url('LeagueSpartanVariable.ttf');
  }

  @font-face {
    font-family: 'FiraCode';
    src: url('FiraCode-VF.ttf');
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  :root {
    ${[
      [colors, 'colors'],
      [transitions, 'transitions'],
      [fontSize, 'fontSize'],
      [fontFamily, 'fontFamily'],
      [breakpoints, 'breakpoints'],
    ]
      .map(args => generateStyles(...args))
      .join()}
    --max-width: 1000px;
    --font-size-base: 18px;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  ::selection {
    color: var(--color-bg);
    background: var(--color-primary);
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 1rem;
  span {
    font-size: 0.75rem;
  }
`;

const Layout = ({ children, customSEO }) => {
  const buildTime = useBuildTime();

  return (
    <>
      {!customSEO && <Seo buildTime={buildTime} />}
      <Global styles={globalStyles} />
      {children}
      <Footer>
        &copy; 2019 by LekoArts. All rights reserved. <br />
        <a href="https://github.com/LekoArts/gatsby-starter-minimal-blog">
          GitHub Repository
        </a>
        <br />
        <span>Last build: {buildTime}</span>
      </Footer>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  customSEO: PropTypes.bool,
};

Layout.defaultProps = {
  customSEO: false,
};
