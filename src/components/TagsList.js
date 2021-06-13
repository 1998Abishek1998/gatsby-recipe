import { Link } from "gatsby"
import React from "react"
import slugify from "slugify"
import setupTags from "../utils/setUpTags"
export const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes)
  return (
    <div className="recipes__tagList">
      <h4>recipes</h4>
      <div className="recipes__tags">
        {newTags.map((tag, index) => {
          const [text, value] = tag
          const tagSlug = slugify(text, { lower: true })
          return (
            <Link
              to={`/tags/${tagSlug}`}
              key={index}
              className="recipes__singleTag"
            >
              {text}({value})
            </Link>
          )
        })}
      </div>
    </div>
  )
}
