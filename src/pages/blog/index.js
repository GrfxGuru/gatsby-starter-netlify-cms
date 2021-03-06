import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Img from 'gatsby-image'
import Sidebar from '../../components/sidebar'
import Footer from '../../components/footer'

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>
           {props.text}
           </Link>
  } else {
    return <span>{props.text}</span>
  }
}

const BlogIndexPage = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext
  const previousUrl = index - 1 == 1 ? '' : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  return (
    <Layout>
      <div className='pwArrowBackground' />
      <section className='section'>
        <div className='container'>
          <div className='column2'>
            <div>
              <h1 className='indexBlogPostTitle'>Blog Posts</h1>
              {/* {group
                                             .map(({ node }) => (
                                               <div className='content' style={{ border: '1px solid #333', padding: '2em 4em' }} key={node.id}>
                                                 <p>
                                                   <Link className='has-text-primary' to={node.frontmatter.slug}>
                                                   {node.frontmatter.title}
                                                   </Link>
                                                   <br/>
                                                   <small>{node.frontmatter.date}</small>
                                                 </p>
                                                 <p>
                                                   {node.frontmatter.blurb || node.excerpt}
                                                   <br />
                                                   <br />
                                                   <Link className='button is-small' to={node.frontmatter.slug}> Keep Reading →
                                                   </Link>
                                                 </p>
                                               </div>
                                             ))} */}
              <div className='pageNavigation'>
                <span className='previousLink'><NavLink test={first} url={previousUrl} text='Go to Previous Page'/></span>
                <span className='nextLink'><NavLink test={last} url={nextUrl} text='Go to Next Page' /></span>
              </div>
              <div className='clearPageNavigation' />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </Layout>
  )
}
export default BlogIndexPage
