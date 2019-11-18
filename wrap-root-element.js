import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'
import Code from './src/components/code'

// `components` is its own object outside of render so that the references to
// components are stable

const Pre = preProperties => {
  const props = preToCodeBlock(preProperties)
  // If there's a codeString and some props, we passed the test
  if (props) {
    return <Code {...props} />
  }
  // It's possible to have a pre without a code in it

  return <pre {...preProperties} />
}

const components = {
  pre: Pre,
}
const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)

wrapRootElement.propTypes = {
  element: PropTypes.node,
}

export default wrapRootElement
