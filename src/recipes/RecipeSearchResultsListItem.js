import React from 'react'
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export const RecipeSearchResultsListItem = ({ recipe, ingredients = [] }) => {
    const history = useHistory()
    const { search } = useLocation()
    const params = new URLSearchParams(search)
    const selectedDate = new Date(params.get('date'))

    const missingIngredients = recipe.ingredients.filter(recipeIngredient => (!ingredients.some(ingredient => ingredient.name === recipeIngredient.name)))

    const addMealWithRecipes = async () => {
        await fetch('/meals', {
            method: 'post',
            body: JSON.stringify({
                date: selectedDate,
                recipeId: recipe.id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        history.push('/')
    }

    return (
        <div className="search-list-item"
            onClick={addMealWithRecipes}>
            <h3>{recipe.name}</h3>
            {missingIngredients.length === 0
                ? <p>You have all the Ingredients</p>
                : <p>You're missing {missingIngredients.length} Ingredients</p>}
        </div>
    )
}