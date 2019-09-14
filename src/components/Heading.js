import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';

const validHeadingLevels = [1, 2, 3, 4, 5, 6];
const sizes = validHeadingLevels.map(
  level => `var(--font-size-heading-${level})`
);

function Heading({ level = 2, ...props }) {
  const parsedLevel = parseInt(level, 10);
  return jsx(`h${parsedLevel}`, {
    css: {
      fontFamily: 'var(--font-family-heading)',
      textTransform: 'uppercase',
      fontVariationSettings: "'wght' 500",
      fontSize: sizes[level - 1],
    },
    ...props,
  });
}

Heading.propTypes = {
  level: PropTypes.oneOf([
    ...validHeadingLevels,
    ...validHeadingLevels.map(level => level.toString()),
  ]).isRequired,
};

export default Heading;
