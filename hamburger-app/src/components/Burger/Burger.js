import React from 'react';
import classes from './Burger.css'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
               return <BurgerIngredient key={igKey + i} type={igKey}/>
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el); //spłaszczenie tablicy
        }, []);

    if(transformIngredients.length === 0) {
		transformIngredients = <p>Please start adding ingredients</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={"bread_top"}/>
            {transformIngredients}
            <BurgerIngredient type={"bread_bottom"}/>
        </div>
    )
}

export default burger;
