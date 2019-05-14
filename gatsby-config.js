module.exports = {
  siteMetadata: {
    title: 'Peter Witham',
    description: 'Developer, Designer, Media Producer',
    siteUrl: `https://peterwitham.us`,
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
