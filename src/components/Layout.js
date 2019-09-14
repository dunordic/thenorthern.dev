import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { css, Global } from '@emotion/core';
import { normalize } from 'polished';
import PTRootVF from '../pt-root-vf.ttf';
import LeagueSpartan from '../LeagueSpartanVariable.ttf';
import FiraCode from '../FiraCode-VF.ttf';
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
  Object.entries(obj)
    .map(([key, value]) => `--${kebabCase(`${name}-${key}`)}: ${value}`)
    .join(';');

const globalStyles = css`
  ${normalize()}
  @font-face {
    font-family: 'League Spartan VF';
    src: url(${LeagueSpartan});
  }

  @font-face {
    font-family: 'PT-Root';
    src: url(${PTRootVF});
  }

  @font-face {
    font-family: 'FiraCode';
    src: url(${FiraCode});
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
      .join(';')};
    --max-width: 1000px;
  }

  html,
  body {
    box-sizing: border-box;
  }
  body {
    background: var(--colors-bg);
    color: var(--colors-text);
    font-family: var(--font-family-mono);
    font-size: var(--font-size-base);
    font-variation-settings: 'wght' 300;
    line-height: 1.5;
  }
  ::selection {
    color: var(--colors-bg);
    background: var(--colors-secondary-light);
  }
`;

const Layout = ({ children, customSEO }) => {
  const buildTime = useBuildTime();

  return (
    <>
      {!customSEO && <Seo buildTime={buildTime} />}
      <Global styles={globalStyles} />
      {children}
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
