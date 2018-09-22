import React from 'react';
import classes from './NavigationItems.css';
import Items from './NavigationItem/NavigationItem';

const NavigationItems = () => (
    <ul className={classes.Navigation}>
        <Items
            link={"/"}
            active={true}>
            Burger Builder</Items>
        <Items
            link={"/"}>Checkout</Items>
    </ul>
);

export default NavigationItems