module.exports = {
  siteMetadata: {
    title: 'Peter Witham',
    description: 'Developer, Designer, Media Producer',
    siteUrl: 'https://peterwitham.us',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-plugin-feed`,
              options: {
                  query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
                  feeds: [
                      {
                          serialize: ({query: {site, allMarkdownRemark}}) => {
                              return allMarkdownRemark.edges.map(edge => {
                                  return Object.assign({}, edge.node.frontmatter, {
                                      description: edge.node.excerpt,
                                      date: edge.node.frontmatter.date,
                                      url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                      guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                                      custom_elements: [{"content:encoded": edge.node.html}],
                                  })
                              })
                          },
                          query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
                          output: "/rss.xml",
                          title: "PeterWitham.com RSS Feed",
                          // optional configuration to insert feed reference in pages:
                          // if `string` is used, it will be used to create RegExp and then test if pathname of
                          // current page satisfied this regular expression;
                          // if not provided or `undefined`, all pages will have feed reference inserted
                          match: "^/blog/",
                      },
                  ],
              },
          },
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            }
          },
          {
            resolve: `gatsby-remark-prettier`,
            options: {
              // Look for local .prettierrc file.
              // The same as `prettier.resolveConfig(process.cwd())`
              usePrettierrc: true,
              // Overwrite prettier options, check out https://prettier.io/docs/en/options.html
              prettierOptions: {}
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
          },
          {
            resolve: `gatsby-plugin-sitemap`,
          },
          {
            resolve: 'gatsby-plugin-flexsearch',
            options: {
              languages: ['en'],
              type: 'MarkdownRemark',
              fields: [
                {
                  name: 'title',
                  indexed: true,
                  resolver: 'frontmatter.title',
                  attributes: {
                    encode: 'balance',
                    tokenize: 'strict',
                    threshold: 6,
                    depth: 3,
                  },
                  store: true,
                },
                {
                  name: 'description',
                  indexed: true,
                  resolver: 'frontmatter.blurb',
                  attributes: {
                    encode: 'balance',
                    tokenize: 'strict',
                    threshold: 6,
                    depth: 3,
                  },
                  store: false,
                },
                {
                  name: 'url',
                  indexed: false,
                  resolver: 'frontmatter.slug',
                  store: true,
                },
              ],
            },
          },
        ],
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: `gatsby-remark-responsive-image`,
      options: {
        // It's important to specify the maxWidth (in pixels) of
        // the content container as this plugin uses this as the
        // base for generating different widths of each image.
        maxWidth: 800,
      },
    },
    {
      resolve:'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true,            // Activates purging in npm run develop
        purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
