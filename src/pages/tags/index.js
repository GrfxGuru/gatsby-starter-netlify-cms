import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Sidebar from '../../components/sidebar'
import Footer from '../../components/footer'

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Layout>
    <section className="section">
      <Helmet title={`Tags | ${title}`} />
      <div className="container content">
        <Sidebar/>
        <div className="columns">
          <div
            className="column taglistPage"
            style={{ marginBottom: '6rem' }}
          >
            <h2 className="is-bold-light">Tags</h2>
            <ul className="taglist tagListIndexPage">
              {group.map(tag => (
                  <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} className="tagListOnPosts">
                    {tag.fieldValue} ({tag.totalCount})
                  </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
