import React from 'react';
import Aux from '../../../hoc/Auxs';
import Button from "../../UI/Button/Button";

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
			<p><strong>Total price: {props.totalPrice.toFixed(2)}</strong></p>
			<p>Continue to Checkout?</p>
			<Button clicked={props.cancel} btnType="Danger">CENCEL</Button>
			<Button clicked={props.continue} btnType="Success">CONTINUE</Button>
		</Aux>
	)

};

export default OrderSummary;