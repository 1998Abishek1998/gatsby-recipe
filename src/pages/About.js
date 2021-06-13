import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layout"
import RecipeList from "../components/RecipeList"
const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="aboutPg">
          <article>
            <h2>Lorem, ipsum dolor sit amet?</h2>
            <p>
              corporis deleniti eius sed temporibus natus eos similique ipsam
              corporis deleniti eius sed temporibus natus eos similique ipsam
              distinctio quasi officia animi nihil, alias quisquam maiores?
            </p>
            <p>
              corporis deleniti eius sed temporibus natus eos similique ipsam
              corporis deleniti eius sed temporibus natus eos similique ipsam
            </p>
            <Link to="/Contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="person puring salt in bowl"
            className="aboutPg__img"
            placeholder="tracedSVG"
          />
        </section>
        <section className="aboutPg__featured">
          <RecipeList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRecipe(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        prepTime
        cookTime
        image {
          file {
            url
          }
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`
export default About
