import React from 'react';
import { useEffect, useState } from 'react';
import './Meals.css';

const Meals = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])


    return (
        <div>
            {
                foods.map(food => <Food abul={food}></Food>)
            }
        </div>
    );
};

const Food = (props) => {
    const { strMealThumb, strMeal } = props.abul;
    return (
        <div className="meal">
            <img className="meal-img" src={strMealThumb} alt="" />
            <p>Meal Name: {strMeal}</p>
        </div>
    )
}

export default Meals;