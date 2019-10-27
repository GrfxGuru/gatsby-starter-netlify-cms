import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'

class TagRoute extends React.Component {
  render () {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.frontmatter.slug}>
        <Link to={post.node.frontmatter.slug}>
        <p className='is-size-2'>
          {post.node.frontmatter.title}
        </p>
        </Link>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
            totalCount === 1 ? '' : 's'
            } tagged with “${tag}”`

    return (
      <Layout>
        <section className='section'>
          <Helmet title={`${tag} | ${title}`} />
          <div className='container content'>
            <Sidebar/>
            <div className='columns taglistPage'>
              <div className='column' style={{marginBottom: '6rem'}}>
                <h3 className='is-bold-light'>{tagHeader}</h3>
                <ul className='taglist is-size-3' style={{fontWeight: 'bold'}}>
                  {postLinks}
                </ul>
                <p>
                  <Link to='/tags/'> Browse all tags
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagSinglePage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`
