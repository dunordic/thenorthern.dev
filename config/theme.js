import { lighten, darken } from 'polished';

const lightness = [
  { lightness: 0.15, suffix: 'est' },
  { lightness: 0.1, suffix: 'er' },
  { lightness: 0.5 },
];

const baseColors = {
  primary: 'hsl(343,72%,65%)',
  bg: 'hsl(222,100%,3%)', // Background color
  text: 'hsla(0, 100%, 100%, 0.9)',
  secondary: 'hsl(295,88%,80%)',
  tertiary: 'hsl(24,57%,70%)',
};

export const colors = Object.entries(baseColors).reduce(
  (acc, [name, color]) => {
    lightness.forEach(({ lightness: lightnessStep, suffix = '' }) => {
      acc[`${name}Light${suffix}`] = lighten(lightnessStep, color);
      acc[`${name}Dark${suffix}`] = darken(lightnessStep, color);
    });
    return acc;
  },
  {
    ...baseColors,
    greyDark: 'rgba(0, 0, 0, 0.9)',
    grey: 'rgba(0, 0, 0, 0.7)',
    greyLight: 'rgba(0, 0, 0, 0.5)',
    greyLightest: 'rgba(0, 0, 0, 0.25)',
  }
);

export const transitions = {
  normal: '350ms',
};

export const fontSize = {
  small: '0.9rem',
};

export const fontFamily = {
  serif: `'Bitter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', serif`,
  sansSerif: `'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
};

export const breakpoints = {
  tablet: '1200px',
  phone: '600px',
};
