import { useContext, useState } from 'react'
import { CategoryContext } from '../context/CategoryContext'
import { Recipes, useRecipesContext } from '../context/RecipesContext'

const Form = () => {

    const [recipes, saveSearch] = useState<Recipes>({
        ingredient: '',
        category: ''
    })

    const { categories } = useContext(CategoryContext)
    const { searchRecipes } = useRecipesContext()

    const getData = (e: any) => {
        saveSearch({
            ...recipes,
            [e.target.name]: e.target.value
        })
    }

    const saveSubmit = (e: any) => {
        e.preventDefault()
        searchRecipes(recipes)
    }

    return (
        <form
            className='col-12'
            onSubmit={saveSubmit}
        >
            <fieldset className='text-center'>
                <legend>Search for cocktails by category or ingredient</legend>
            </fieldset>
            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input
                        type='text'
                        className='form-control'
                        name='ingredient'
                        placeholder='Search for ingredient'
                        onChange={getData}
                    />
                </div>
                <div className='col-md-4'>
                    <select
                        className='form-control'
                        name='category'
                        onChange={getData}
                    >
                        <option value=''>-- Select category --</option>
                        {categories.map((category: any) => (
                            <option
                                key={category.strCategory}
                                value={category.strCategory}>
                                {category.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='col-md-4'>
                    <input
                        type='submit'
                        className='btn btn-block btn-primary'
                        value='Search cocktail'
                    />
                </div>
            </div>
        </form>
    )
}

export default Form
