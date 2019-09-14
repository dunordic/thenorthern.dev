import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const PrevNext = ({ next, prev }) =>
  (next || prev) && (
    <div
      css={css`
        display: grid;
        grid-template: 'prev next';
        margin: 6rem auto 0 auto;
        &:first-child {
          grid-area: prev;
        }
        &:nth-child(2) {
          grid-area: next;
        }
      `}
    >
      {[['previous', prev], ['next', next]]
        .filter(([, navigation]) => Boolean(navigation))
        .map(([title, navigation]) => (
          <div key={title}>
            <span
              css={css`
                text-transform: uppercase;
                font-size: 0.8rem;
                color: var(--colors-primary-light);
              `}
            >
              {title}
            </span>
            <Link
              css={css`
                color: var(--colors-primary);
                display: flex;
                align-items: center;
              `}
              to={navigation.fields.slug}
            >
              {navigation.frontmatter.title}
            </Link>
          </div>
        ))}
    </div>
  );

export default PrevNext;

PrevNext.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
};

PrevNext.defaultProps = {
  next: null,
  prev: null,
};
