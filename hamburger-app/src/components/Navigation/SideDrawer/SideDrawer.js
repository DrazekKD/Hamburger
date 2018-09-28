import React from 'react';
import classes from './SideDrawer.css';
import Logo from   '../../Logo/Logo';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import Aux from '../../../hoc/Auxs/Auxs'
import Backdrop from '../../UI/Backdrop/Backdrop';
import CloseButton from './CloseButton/CloseButton'

const sideDrawer = (props) => {

    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.show) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux >
            <Backdrop show={props.show} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <CloseButton clicked={props.closed}/>
                <div className={classes.Logo} onClick={props.closed}>
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