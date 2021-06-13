import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { AllRecipes } from "../components/AllRecipes"
import Layout from "../components/Layout"
export default function Home() {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="flour and eggs"
            placeholder="tracedSVG"
            layout="fullWidth"
            className="hero__img"
          />
          <div className="hero__container">
            <div className="hero__text">
              <h1>Simply Recepie</h1>
              <h4>no fluff, just Recepie</h4>
            </div>
          </div>
        </header>
        <AllRecipes />
      </main>
    </Layout>
  )
}
