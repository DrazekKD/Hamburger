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
    };

    render() {
        return(
            <Aux>
                <ToolBar/>
                <SideDrawer
                    closed={this.sideDrawerCloseHandler}
                    show={this.state.showSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
};
export default Layout;