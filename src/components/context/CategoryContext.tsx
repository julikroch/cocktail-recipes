import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CategoryContext = createContext({
    categories: []
});

const CategoryProvider = (props: { children: any }) => {

    const [categories, saveCategories] = useState([]);

    useEffect(() => {
        const APIget = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const result = await axios.get(url);
            saveCategories(result.data.drinks);
        }
        APIget()
    }, [])


    return (
        <CategoryContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider