import React from "react"
import RecipeList from "./RecipeList"
import { TagsList } from "./TagsList"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        cookTime
        title
        prepTime
        content {
          tags
        }
        image {
          file {
            url
          }
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`
export const AllRecipes = () => {
  const {
    allContentfulRecipe: { nodes: recipes },
  } = useStaticQuery(query)

  console.log(recipes)
  return (
    <section className="recipes">
      <TagsList recipes={recipes} />
      <RecipeList recipes={recipes} />
    </section>
  )
}
