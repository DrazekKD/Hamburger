import React, {Component} from 'react';
import Aux from '../../hoc/Auxs'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 1,
            meat: 1,
        }
    };

    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;