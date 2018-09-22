import React from 'react';
import classes from './NavigationItem.css'

const navigationItem = (props) => (

    <li className={[classes.item, props.active ? classes.active : null].join(' ')}>
        <a
            className={classes.link}
            href={props.link}>
            {props.children}
        </a>
    </li>
);

export default navigationItem;