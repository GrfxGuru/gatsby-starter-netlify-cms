import React from 'react'
import PropTypes from "prop-types";
import BlogPost from "../templates/blog-post-swift";

const Card = ({title, text, cardLink}) => (
    <a href={cardLink}>
        <div className="singleCard">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    </a>
)

export default Card
