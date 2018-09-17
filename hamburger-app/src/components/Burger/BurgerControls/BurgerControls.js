import React from 'react';
import classes from './BurgerControls.css';
import BurgerControl from './BurgerControl/BurgerControl';

const controls = [
	{ label: 'Salad', type: 'salad'},
	{ label: 'Bacon', type: 'bacon'},
	{ label: 'Cheese', type: 'cheese'},
	{ label: 'Meat', type: 'meat'},
];

const burgerControls = (props) => {
	return(
		<div className={classes.BuildControls}>
			{controls.map( control =>(
					<BurgerControl
						key={control.label}
						label={control.label}
						added={() => props.addedIngredients(control.type)}
						reset={() => props.resetIngredient(control.type)}
						disabled={props.disabled[control.type]}/>
				)
			)}
		</div>
	);
};

export default burgerControls;