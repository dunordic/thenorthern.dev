import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
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
  form {
    & > div {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
        margin-top: 0.5rem;
        box-sizing: border-box;
        width: 100%;
      }
      textarea {
        resize: vertical;
        box-sizing: border-box;
        min-height: 150px;
        width: 100%;
        margin-top: 0.5rem;
      }
    }
  }
`;

const Contact = () => (
  <Layout>
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Content>
      <h1>Contact</h1>
      <p>
        Super cool intro text to get people contacting me! It uses Netlify's
        form feature.
      </p>
      <form
        name="contact-form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
      >
        <div>
          <label htmlFor="contact-name">
            Name
            <input name="name" id="contact-name" type="text" required />
          </label>
        </div>
        <div>
          <label htmlFor="contact-email">
            E-Mail{' '}
            <input name="email" id="contact-email" type="email" required />
          </label>
        </div>
        <div>
          <label htmlFor="contact-message">
            Your Message{' '}
            <textarea name="message" id="contact-message" required />
          </label>
        </div>
        <div>
          <button>Send</button>
        </div>
        <input type="hidden" name="form-name" value="contact-form" />
      </form>
    </Content>
  </Layout>
);

export default Contact;
