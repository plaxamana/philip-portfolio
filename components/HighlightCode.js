/* eslint-disable react/no-find-dom-node */
import highlight from 'highlight.js'
import { createRef, useEffect } from 'react'
import { findDOMNode } from 'react-dom'

export default function HighlightCode({ children, language }) {
  const code = createRef()

  useEffect(() => {
    highlight.highlightBlock(findDOMNode(code.current))
  }, [code])

  return (
    <pre>
      <code className={language} ref={code}>
        {children}
      </code>
    </pre>
  )
}
