import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import Menu from '../Menu/Menu'

const toolbar = (props) => {
	return(
		<header className={classes.Toolbar}>
			<Menu open={props.open}/>
			<div className={classes.Logo}>
                <Logo/>
			</div>
			<nav>
				<NavigationItems/>
			</nav>
		</header>
	);
};

export default toolbar