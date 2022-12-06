import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Meals.css'

const Meals = () => {
    const [meals,setMeals]=useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=e')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals
            ))
    },[])
    return (
        <div className='container'>
            <div className="food-part">
                {
                    meals.map(meal=><Food
                    meal={meal}
                    key={meal.idMeal}>

                    </Food>)
                }
            </div>
            <div className="order-part">
                <h5>this is order</h5>
            </div>
        </div>
    );
};

export default Meals;