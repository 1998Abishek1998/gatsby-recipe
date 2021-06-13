import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../utils/setUpTags"
import slugify from "slugify"

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

const Tags = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  const newTags = setupTags(recipes)
  return (
    <Layout>
      <div className="tags">
        <div className="tags__container">
          {newTags.map((tag, index) => {
            const [text, value] = tag
            const tagSlug = slugify(text, { lower: true })

            return (
              <Link to={`/tags/${tagSlug}`} key={index} className="tags__item">
                {text}({value})
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
export default Tags
