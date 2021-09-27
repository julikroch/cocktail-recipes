import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

export type Recipes = {
    ingredient: string,
    category: string
}

type RecipesT = {
    searchRecipes: React.Dispatch<React.SetStateAction<Recipes>>,
    saveConsult: React.Dispatch<React.SetStateAction<boolean>>,
    recipes: any
}

export const RecipesContext = createContext<RecipesT | null>(null)

export const useRecipesContext = () => useContext(RecipesContext)

const RecipesProvider = (props: any) => {
    const [recipes, saveRecipes] = useState([])
    const [search, searchRecipes] = useState<Recipes>({
        ingredient: '',
        category: ''
    })
    const [consult, saveConsult] = useState(false)

    const values: RecipesT = {
        recipes,
        searchRecipes,
        saveConsult
    }

    const { ingredient, category } = search

    useEffect(() => {
        if (consult) {
            const getRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;
                const result = await axios.get(url)
                saveRecipes(result.data.drinks)
            }

            getRecipes()
        }

    }, [search])

    return (
        <RecipesContext.Provider
            value={values}
        >
            {props.children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider