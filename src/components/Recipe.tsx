import React from 'react'

const Recipe = (props: { recipe: any }) => {
    return (
        <div className="col-md-4 mt-5">
            <div className="card">
                <h2 className='card-header'>{props.recipe.strDrink}</h2>
            </div>
        </div>
    )
}

export default Recipe
