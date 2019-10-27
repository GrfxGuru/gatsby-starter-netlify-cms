const _ = require("lodash");
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      query IndexQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { regex: "/blog-post/" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 500)
              id
              fields {
                slug
              }
              frontmatter {
                title
                blurb
                templateKey
                date(formatString: "MMMM DD, YYYY")
                slug
                tags
              }
            }
          }
        }
      }
    `).then(result => {
      createPaginatedPages({
        edges: result.data.allMarkdownRemark.edges,
        createPage: createPage,
        pageTemplate: "src/templates/index.js",
        pageLength: 5, // This is optional and defaults to 10 if not used
        pathPrefix: "/", // This is optional and defaults to an empty string if not used
        context: {} // This is optional and defaults to an empty object if not used
      });
      const posts = result.data.allMarkdownRemark.edges;

      posts.forEach(edge => {
        const id = edge.node.id;
        createPage({
          path: edge.node.frontmatter.slug,
          tags: edge.node.frontmatter.tags,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id
          }
        });
      });

      // Tag pages:
      let tags = [];
      // Iterate through each post, putting all found tags into `tags`
      posts.forEach(edge => {
        if (_.get(edge, "node.frontmatter.tags")) {
          tags = tags.concat(edge.node.frontmatter.tags);
        }
      });
      // Eliminate duplicate tags
      tags = _.uniq(tags);

      // Make tag pages
      tags.forEach(tag => {
        const tagPath = `/tags/${_.kebabCase(tag)}/`;

        createPage({
          path: tagPath,
          component: path.resolve(`src/templates/tags.js`),
          context: {
            tag
          }
        });
      });

      resolve();
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
