import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from '@emotion/styled';
import kebabCase from 'lodash.kebabcase';

import { Layout } from '../components';
import config from '../../config';

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: var(--colors-bg);
  z-index: 9000;
  margin-top: -3rem;
  @media (max-width: var(--breakpoints-tablet)) {
    padding: 3rem 3rem;
  }
  @media (max-width: var(--breakpoints-phone)) {
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h3`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`;

const Category = ({
  data: {
    allMdx: { group },
  },
}) => (
  <Layout>
    <Helmet title={`Categories | ${config.siteTitle}`} />
    <Content>
      {group.map(category => (
        <Title key={category.fieldValue}>
          <Link to={`/categories/${kebabCase(category.fieldValue)}`}>
            {category.fieldValue}
          </Link>{' '}
          ({category.totalCount})
        </Title>
      ))}
    </Content>
  </Layout>
);

export default Category;

Category.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const postQuery = graphql`
  query CategoriesPage {
    allMdx {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`;
