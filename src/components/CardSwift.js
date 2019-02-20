import React from 'react'
import PropTypes from 'prop-types'
import BlogPost from '../templates/blog-post-swift'

const CardSwift = ({title, text, cardLink, cardDesign}) => (
  <a href={cardLink}>
    <div className={cardDesign}>
      <h2>{title}</h2>
      <p>
        {text} </p>
    </div>
  </a>
)

export default CardSwift
