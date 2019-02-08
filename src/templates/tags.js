/*
import React from "react"
import PropTypes from "prop-types"
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? "" : "s"
        } tagged with "${tag}"`

    return (
        <Layout>
        <section className="section">
        <Helmet title={`${tagHeader}`} />
    <div className="container content">
        <Sidebar/>
        <div className="columns taglistPage">
            <div
                className="column"
                style={{marginBottom: '6rem'}}
            >
                <h2 className="is-bold-light">{tagHeader}</h2>
                <ul className="taglist is-size-4">
                    {edges.map(({ node }) => {
                        const { title } = node.frontmatter
                        return (
                            <li key={node.frontmatter.slug}>
                                <Link to={node.frontmatter.slug}>{title}</Link>
                            </li>
                        )
                    })}
                </ul>
                <p>
                    <Link to="/tags/">Browse all tags</Link>
                </p>
            </div>
        </div>
    </div>
    </section>
    <Footer/>
    </Layout>
    )


}

Tags.propTypes = {
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            totalCount: PropTypes.number.isRequired,
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        frontmatter: PropTypes.shape({
                            path: PropTypes.string.isRequired,
                            title: PropTypes.string.isRequired,
                        }),
                    }),
                }).isRequired
            ),
        }),
    }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            link
          }
        }
      }
    }
  }
`
*/

import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'

class TagRoute extends React.Component {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges
        const postLinks = posts.map(post => (
            <li key={post.node.frontmatter.slug}>
                <Link to={post.node.frontmatter.slug}>
                    <p className="is-size-2">{post.node.frontmatter.title}</p>
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
                <section className="section">
                    <Helmet title={`${tag} | ${title}`} />
                    <div className="container content">
                        <Sidebar/>
                        <div className="columns taglistPage">
                            <div
                                className="column"
                                style={{marginBottom: '6rem'}}
                            >
                                <h2 className="is-bold-light">{tagHeader}</h2>
                                <ul className="taglist is-size-4">{postLinks}</ul>
                                <p>
                                    <Link to="/tags/">Browse all tags</Link>
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
