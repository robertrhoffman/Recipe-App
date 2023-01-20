import React from "react"
import RecipeData from "./RecipeData.js"
import RecipeCreate from "./RecipeCreate.js"
import RecipeList from "./RecipeList.js"

// For every (TODO) create we have to render a Board 
const RecipeTodoList = ({ recipe, deleteRecipe, index }) => {  
  
  // this section be added when a new item is added: 
  return (
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo}/></td>
            <td className="content_td"><p>{(recipe.ingredients)}</p></td>
            <td className="content_td"><p>{(recipe.preparation)}</p></td>
            <td><button onClick={deleteRecipe} name="delete" type="delete">Delete</button></td>
          </tr>
        )
}

export default RecipeTodoList
