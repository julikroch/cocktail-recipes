import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ModalContext = createContext(null);

const ModalProvider = (props: { children: any }) => {

    const [idRecipe, saveRecipe] = useState(null)
    const [selectedRecipe, getRecipe] = useState({})

    useEffect(() => {
        const findRecipe = async () => {
            if (!idRecipe) return

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`
            const result = await axios.get(url)
            getRecipe(result.data.drinks[0])
        }
        findRecipe()
    }, [idRecipe])

    return (
        <ModalContext.Provider
            value={{
                selectedRecipe,
                saveRecipe,
                getRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider