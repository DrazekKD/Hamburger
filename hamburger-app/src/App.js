import React, { Component } from 'react';
import classes from './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import ToolBar from './components/Navigation/Toolbar/Toolbar'
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
          <Layout>
              <ToolBar/>
              <BurgerBuilder/>
          </Layout>
      </div>
    );
  }
}

export default App;
