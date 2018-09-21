import React from 'react';
import classes from './Toolbar.css';

const toolbar = (props) => {
	return(
		<header className={classes.Toolbar}>
			<div>MENU</div>
			<div>logo</div>
			<nav></nav>
		</header>
	);
};

export default toolbar