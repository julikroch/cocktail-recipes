import { useContext } from 'react'
import { CategoryContext } from '../context/CategoryContext'

const Form = () => {
    const { categories } = useContext(CategoryContext)

    return (
        <form
            className='col-12'
        >
            <fieldset className='text-center'>
                <legend>Search for cocktails by category or ingredient</legend>
            </fieldset>
            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input
                        type='text'
                        className='form-control'
                        name='name'
                        placeholder='Search for ingredient'
                    />
                </div>
                <div className='col-md-4'>
                    <select
                        className='form-control'
                        name='category'
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
