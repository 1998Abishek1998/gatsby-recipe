import { graphql, Link } from "gatsby"
import React from "react"
import { BsClockHistory, BsClock, BsPeople } from "react-icons/bs"
import slugify from "slugify"
import Layout from "../components/Layout"
const RecipeTemplate = ({ data }) => {
  const {
    title,
    cookTime,
    content,
    prepTime,
    servings,
    description: { description },
    image: {
      file: { url },
    },
  } = data.contentfulRecipe
  const { tags, instructions, ingredients, tools } = content
  return (
    <Layout>
      <main className="page">
        <div className="recipePage__page">
          {/* hero */}
          <section className="recipePage__hero">
            <img src={url} alt={title} className="recipePage__img" />
            <article className="recipePage__info">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="recipePage__icons">
                <article>
                  <BsClock />
                  <h5>prep Time</h5>
                  <p>{prepTime} min.</p>
                </article>
                <article>
                  <BsClockHistory />
                  <h5>cook Time</h5>
                  <p>{cookTime} min.</p>
                </article>
                <article>
                  <BsPeople />
                  <h5>servings</h5>
                  <p>{servings}</p>
                </article>
              </div>
              <div className="recipePage__tags">
                Tags :{" "}
                {tags.map((tag, index) => {
                  const tagSlug = slugify(tag, { lower: true })
                  return (
                    <Link
                      to={`/tags/${tagSlug}`}
                      key={index}
                      className="recipePage__singleTag"
                    >
                      {tag}
                    </Link>
                  )
                })}
              </div>
            </article>
          </section>
          {/* rest of info */}
          <section className="recipePage__content">
            <article>
              <h4>instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div className="recipePage__instruction" key={index}>
                    <header>
                      <h5>step : {index + 1}</h5>
                    </header>
                    <div className="singleLine"></div>

                    <p>- {item}</p>
                  </div>
                )
              })}
            </article>
            <article className="recipePage__pageColumn">
              <div>
                <h4>ingredients</h4>
                {ingredients.map((item, index) => {
                  return (
                    <div key={index}>
                      <p>- {item}</p>
                      <div className="singleLine"></div>
                    </div>
                  )
                })}
              </div>
              <div>
                <h4>tools</h4>
                {tools.map((item, index) => {
                  return (
                    <>
                      <p key={index}>- {item}</p>
                      <div className="singleLine"></div>
                    </>
                  )
                })}
              </div>
            </article>
          </section>
        </div>
      </main>
    </Layout>
  )
}
export const query = graphql`
  query getSingleRecipe($title: String) {
    contentfulRecipe(title: { eq: $title }) {
      servings
      prepTime
      featured
      cookTime
      image {
        file {
          url
        }
      }
      title
      content {
        instructions
        tags
        ingredients
        tools
      }
      description {
        description
      }
    }
  }
`
export default RecipeTemplate
