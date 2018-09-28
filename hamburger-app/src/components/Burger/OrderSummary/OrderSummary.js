import React, {Component} from 'react';
import Aux from '../../../hoc/Auxs/Auxs';
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
	render() {
		let ingredients = Object.keys(this.props.ingredients)
			.map((keyIng) => {
				return (
					<li key={keyIng}>
						<strong style={{textTransform: 'capitalize'}}>{keyIng}</strong>: {this.props.ingredients[keyIng]}
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
				<p><strong>Total price: {this.props.totalPrice.toFixed(2)}</strong></p>
				<p>Continue to Checkout?</p>
				<Button clicked={this.props.cancel} btnType="Danger">CENCEL</Button>
				<Button clicked={this.props.continue} btnType="Success">CONTINUE</Button>
			</Aux>

		);
	}
}

export default OrderSummary;