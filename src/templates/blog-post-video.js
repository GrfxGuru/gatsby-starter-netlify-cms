import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import AdSense from "react-adsense";

export const BlogPostTemplate = ({
                                   content,
                                   contentComponent,
                                   description,
                                   tags,
                                   title,
                                   helmet,
                                 }) => {
  const PostContent = contentComponent || Content

  return (
      <section className="section">
        {helmet || ''}
        <div className="container">
          <div className="columns">
            <Sidebar/>
            <div className="content videoPostBackground">
              <div className="column2 is-10 is-offset-1">
                  <AdSense.Google>
                      client='ca-pub-4419818894134369'
                      slot='7977743668'
                  </AdSense.Google>
                <h1 className="title has-text-weight-bold is-bold-light">
                  {title}
                </h1>
                <p>{description}</p><br/>
                <PostContent content={content} />
                {tags && tags.length ? (
                    <div style={{ marginTop: `4rem` }}>
                      <h4>Tags</h4>
                      <ul className="taglist">
                        {tags.map(tag => (
                              <Link to={`/tags/${kebabCase(tag)}/`} className="tagListOnPosts">{tag}</Link>
                        ))}
                      </ul>
                    </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
      <Layout>
        <BlogPostTemplate
            content={post.html}
            contentComponent={HTMLContent}
            description={post.frontmatter.description}
            helmet={
              <Helmet
                  titleTemplate="%s | Blog"
              >
                <title>{`${post.frontmatter.title}`}</title>
                <meta name="description" content={`${post.frontmatter.description}`} />
              </Helmet>
            }
            tags={post.frontmatter.tags}
            title={post.frontmatter.title}
        />
        <Footer/>
      </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query VideoPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        slug
      }
    }
  }
`
