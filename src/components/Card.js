import React from 'react'
import PropTypes from 'prop-types'
import BlogPost from '../templates/blog-post-swift'

const Card = ({title, text, cardLink, cardDesign}) => (
  <a href={cardLink}>
    <div className={cardDesign}>
      <h2>{title}</h2>
      <p>
        {text} </p>
    </div>
  </a>
)

export default Card
