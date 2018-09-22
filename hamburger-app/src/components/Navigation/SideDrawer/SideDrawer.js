import React from 'react';
import classes from './SideDrawer.css';
import Logo from   '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import Aux from '../../../hoc/Auxs'
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    return (
        <Aux >
            <Backdrop show={props.show} clicked={props.closed}/>
            <div className={classes.SideDrawer}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer