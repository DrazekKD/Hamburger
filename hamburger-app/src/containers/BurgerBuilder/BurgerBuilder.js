import React, {Component} from 'react';
import Aux from '../../hoc/Auxs'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'

const INGREDIENT_PRICES = {
	salad: 0.5,
	bacon: 0.4,
	cheese: 1.3,
	meat: 0.7,
};

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 1,
            meat: 1,
        },
        totalPrice: 4,
        purchasable: true
    };

    updatePurchasable(ingredients) {
        const sum = Object.keys(ingredients)
            .map((keyIng) => {
                return ingredients[keyIng];
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0);

        this.setState({purchasable: sum > 0})
    };


    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ingredients: updateIngredients, totalPrice: newPrice});
		this.updatePurchasable(updateIngredients);
    };

    resetIngredientHandler = (type) => {

      const oldCount = this.state.ingredients[type];
      if(oldCount !== 0) {
          const updateCount = oldCount - 1;
          const updateIngredients = {
              ...this.state.ingredients
          };
          updateIngredients[type] = updateCount;
          const priceDeduction = INGREDIENT_PRICES[type];
          const oldPrice = this.state.totalPrice;
          const newPrice = oldPrice - priceDeduction;
          this.setState({ingredients: updateIngredients, totalPrice: newPrice});
		  this.updatePurchasable(updateIngredients);
      }
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls
                    addedIngredients={this.addIngredientHandler}
					resetIngredient={this.resetIngredientHandler}
					totalPrice={this.state.totalPrice}
					purchasable={this.state.purchasable}
					disabled={disabledInfo}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;