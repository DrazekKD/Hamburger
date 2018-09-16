import  React, {Component} from 'react';
import PropTypse from 'prop-types';
import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component{
    render () {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread_bottom'):
                ingredient = <div className={classes.BreadBottom}></div>
                break;
            case ('bread_top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>)
                break;
            case ('meat'):
                ingredient = <div className={classes.Meat}></div>
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>
                break;
            case ('salat'):
                ingredient = <div className={classes.Salad}></div>
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
};

BurgerIngredient.propType = {
    type: PropTypse.string.isRequired
}
export default BurgerIngredient;