import React from 'react';
import LogoBurger from '../../assets/img/burger-logo.png';
import classes from './Logo.css'
const logo = (props) => {
    return (
       <div className={classes.Logo}>
           <img src={LogoBurger} alt="Logo burger"/>
       </div>
    );
};

export default logo;