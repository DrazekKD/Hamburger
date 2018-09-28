import React , {Component} from 'react';
import Aux from '../Auxs/Auxs'
import classes from './Layout.css';
import ToolBar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    };

    sideOpenCloseHandler = () => {
        this.setState({showSideDrawer: true});
    };

    render() {
        return(
            <Aux>
                <ToolBar open={this.sideOpenCloseHandler}/>
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