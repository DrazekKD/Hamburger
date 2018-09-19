import React from 'react';

import Aux from '../../../hoc/Auxs';
const OrderSummary = (props) => {
	let ingredients = Object.keys(props.ingredients)
			.map((keyIng) =>{
				return (
					<li key={keyIng}>
						<strong style={{textTransform: 'capitalize'}}>{keyIng}</strong>: {props.ingredients[keyIng]}
					</li>
				)
			});


	return (
		<Aux>
			<h3>Your Order</h3>
			<p>a delicious burger with the fallowing ingredients:</p>
			<ul>
				{ingredients}
			</ul>
			<p>Continue to Checkout?</p>
		</Aux>
	)

};

export default OrderSummary;