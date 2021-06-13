import { graphql } from "gatsby"
import React from "react"
import RecipesList from "../components/RecipeList"
import Layout from "../components/Layout"
const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query getRecipeByTag($tag: String) {
    allContentfulRecipe(
      sort: { order: ASC, fields: title }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        id
        cookTime
        title
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
          file {
            url
          }
        }
      }
    }
  }
`
export default TagTemplate
