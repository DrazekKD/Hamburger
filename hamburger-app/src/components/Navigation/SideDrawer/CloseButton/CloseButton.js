import React from 'react';
import classes from './CloseButton.css';

const closeButton = (props) => (
        <button
            className={classes.btn}
            onClick={props.clicked} >CLOSE</button>
);

export  default closeButton