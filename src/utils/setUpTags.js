const setupTags = recipes => {
  const allTags = {}
  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  const newTags = Object.entries(allTags) //put at array
    .sort((a, b) => {
      const [firstTag] = a
      const [secondTag] = b
      return firstTag.localeCompare(secondTag) //sortby comparing name
    })
  return newTags
}
export default setupTags
