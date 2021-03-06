const { paginate } = require(`gatsby-awesome-pagination`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")
const _ = require("lodash")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode})
    const parent = getNode(node.parent)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: 'collection',
      value: parent.sourceInstanceName,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 2000
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            tags
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          nodes {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts, // An array of objects
    itemsPerPage: 10, // How many items you want per page
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? "/" : "/page"),
    component: path.resolve('src/templates/index.js')
  })

  // Extract tag data from query
  const tags = result.data.tagsGroup.group

  // Make tag pages
  tags.forEach(tag => {
    paginate({
      createPage,
      items: tag.nodes,
      itemsPerPage: 10,
      pathPrefix: `/tags/${_.kebabCase(tag.fieldValue)}`,
      component: path.resolve("src/templates/tags.js"),
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
