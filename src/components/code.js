import React from 'react'
import PropTypes from 'prop-types'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import owlLight from 'prism-react-renderer/themes/nightOwlLight'

const Code = ({ codeString, language = 'js', 'react-live': reactLive }) => {
  console.log({ reactLive, codeString })
  if (reactLive) {
    return (
      <LiveProvider noInline theme={owlLight} code={codeString}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  }

  return (
    <Highlight
      Prism={defaultProps.Prism}
      theme={owlLight}
      code={codeString}
      language={language}
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
  )
}

Code.propTypes = {
  codeString: PropTypes.string,
  language: PropTypes.string,
  'react-live': PropTypes.bool,
}

export default Code
