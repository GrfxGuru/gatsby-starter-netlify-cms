import React from 'react'
import PropTypes from 'prop-types'

export default function HTML (props) {
  return (
    <html {...props.htmlAttributes}>
    <head>
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      <script
        data-name='BMC-Widget'
        src='https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js'
        data-id='pwcom'
        data-description='Support my work on Buy me a coffee!'
        data-message='Thank you for visiting. Want to support my work? Buy me a coffee!'
        data-color='#FF813F'
        data-position='right'
        data-x_margin='18'
        data-y_margin='18'></script>
      {props.headComponents}
    </head>
    <body {...props.bodyAttributes}>
      {props.preBodyComponents}
      <noscript key='noscript' id='gatsby-noscript'>
        This app works best with JavaScript enabled.
      </noscript>
      <div key={`body`} id='___gatsby' dangerouslySetInnerHTML={{ __html: props.body }} />
      <script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script>
      {props.postBodyComponents}
    </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
