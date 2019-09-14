import { lighten, darken, modularScale, hsl } from 'polished';

const baseColors = {
  primary: 'hsl(343,72%,65%)',
  bg: 'hsl(222,100%,3%)', // Background color
  text: 'hsla(0, 100%, 100%, 0.9)',
  secondary: 'hsl(295,88%,80%)',
  tertiary: 'hsl(24,57%,70%)',
};

export const colors = Object.entries(baseColors).reduce(
  (acc, [name, color]) => {
    const lightnesses = [
      { lightness: 0.15, suffix: 'est' },
      { lightness: 0.1, suffix: 'er' },
      { lightness: 0.05 },
    ];

    acc[name] = color;
    lightnesses.forEach(({ lightness, suffix = '' }) => {
      acc[`${name}Light${suffix}`] = lighten(lightness, color);
      acc[`${name}Dark${suffix}`] = darken(lightness, color);
    });

    return acc;
  },
  {
    greyDarkest: 'hsl(0,0%,10%)',
    greyDark: 'hsl(0, 0%, 20%)',
    grey: 'hsl(0, 0%, 30%)',
    greyLight: 'hsl(0, 0%, 50%)',
    greyLightest: 'hsl(0, 0%, 75%)',
  }
);

export const transitions = {
  normal: '350ms',
};

export const fontSize = {
  small: modularScale(1 / 7),
  base: modularScale(1 / 5),
  heading1: modularScale(4),
  heading2: modularScale(3.25),
  heading3: modularScale(2.333),
  heading4: modularScale(1.75),
  heading5: modularScale(1),
  heading6: modularScale(1 / 5),
};

export const fontFamily = {
  body: `'PT-Root', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', serif`,
  heading: `'League Spartan VF', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  mono: `'FiraCode', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
};

export const breakpoints = {
  tablet: '1200px',
  phone: '600px',
};
