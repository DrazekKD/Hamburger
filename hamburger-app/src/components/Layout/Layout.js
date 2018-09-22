import React , {Component} from 'react';
import Aux from '../../hoc/Auxs'
import classes from './Layout.css';
import ToolBar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    };

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
        console.log('clicked');
    };

    render() {
        return(
            <Aux>
                <ToolBar/>
                <SideDrawer
                    closed={this.state.sideDrawerCloseHandler}
                    show={this.state.showSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};
export default Layout;