import React, {Component} from 'react';
import Aux from '../../hoc/Auxs/Auxs'
import axios from'../../axios-orders';
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spiner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
	salad: 0.5,
	bacon: 0.4,
	cheese: 1.3,
	meat: 0.7,
};

class BurgerBuilder extends Component{
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: true,
        purchase: false,
        loading: false
    };

    componentDidMount() {
        axios.get('https://hamburger-4cc35.firebaseio.com/ingredients.json')
            .then(response =>{
				this.setState({ingredients: response.data});
            })
            .catch(error => {});
    }

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

    purchaseHandler = () => {
        this.setState({purchase: true})
    };

    purchaseCancelHandler = () => {
      this.setState({purchase: false})
    };

    purchaseContinueHandler = () => {
        this.setState({loading: true});
        const order ={
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Kamil Drazek',
                address: {
                    street: 'Test1',
                    zipCode: '213321',
                    country: 'Poland'
                },
                email: 'test1.@gamil.com'
            },
            deliveryMethod: 'fastest'
        };

      axios.post('/orders.json', order)
          .then(response => this.setState({loading: false, purchase: false}))
          .catch(error => this.setState({loading: false, purchase: false}))
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
        let orderSummary =  null;
        let  burger = <Spinner/>;

        if(this.state.ingredients) {
			burger =(
			    <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BurgerControls
                        addedIngredients={this.addIngredientHandler}
                        resetIngredient={this.resetIngredientHandler}
                        totalPrice={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        disabled={disabledInfo}
                        order={this.purchaseHandler}/>
                </Aux>);
            orderSummary = (
                <OrderSummary
				ingredients={this.state.ingredients}
				cancel={this.purchaseCancelHandler}
				continue={this.purchaseContinueHandler}
				totalPrice={this.state.totalPrice}/>)
        }
		if(this.state.loading){
			orderSummary = <Spinner/>
		}
        return(
            <Aux>
                <Modal show={this.state.purchase} closeModal={this.purchaseCancelHandler }>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);