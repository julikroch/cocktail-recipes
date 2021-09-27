import { createContext, useState, useContext } from 'react';

export type Recipes = {
    ingredient: string,
    category: string
}

export type RecipesT = {
    searchRecipes: React.Dispatch<React.SetStateAction<Recipes>>,
}

export const RecipesContext = createContext<RecipesT | null>(null)

export const useRecipesContext = () => useContext(RecipesContext)

const RecipesProvider = (props: any) => {
    const [recipes, saveRecipes] = useState([])
    const [search, searchRecipes] = useState<Recipes>({
        ingredient: '',
        category: ''
    })

    const values: RecipesT = {
        searchRecipes
    }

    return (
        <RecipesContext.Provider
            value={values}
        >
            {props.children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider