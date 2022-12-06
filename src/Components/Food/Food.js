import React from 'react';
import './Food.css'

const Food = (props) => {
    console.log(props.meal)
    const {strMealThumb,strMeal}=props.meal
    return (
        <div className='food-container'>
            <img src={strMealThumb} alt="" />
            <div className="food-info">
                <p>{strMeal}</p>
            </div>
        </div>
    );
};

export default Food;