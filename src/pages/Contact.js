import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { graphql } from "gatsby"

import RecipeList from "../components/RecipeList"
export default function Contact({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) {
  return (
    <Layout>
      <main className="page">
        <Wrapper>
          <article>
            <h3>Want to get in touch ?</h3>
            <p>
              Perspiciatis beatae sapiente dignissimos! Necessitatibus nulla
              voluptas dolor dolores praesentium sequi deleniti, fuga aliquid
              consectetur cupiditate esse, repellat quos nihil corporis quas.
            </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit.
            </p>
          </article>
          <article>
            <form
              action="https://formspree.io/f/xdoygvod"
              method="POST"
              className="form contact-form"
            >
              <div className="form-row">
                <label htmlFor="name"> your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email"> your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message"> your message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn btn__block">
                submit
              </button>
            </form>
          </article>
        </Wrapper>
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
const Wrapper = styled.section`
  display: grid;
  gap: 2rem 3rem;
  padding-bottom: 3rem;
  .form-row {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`
