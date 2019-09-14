import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const Code = ({ codeString, language, ...props }) => {
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true} theme={theme}>
        <LiveEditor
          css={css`
            background: ${theme.plain.backgroundColor};
            border-radius: 5px;
            margin-bottom: 1rem;
            font-family: var(--font-family-mono);
          `}
        />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            // eslint-disable-next-line react/jsx-key
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/jsx-key
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

Code.propTypes = {
  codeString: PropTypes.string,
  language: PropTypes.string,
  'react-live': PropTypes.bool,
};

export default Code;
