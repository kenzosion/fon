import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import { BrowserRouter, Route, Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar>
          <Switch>
              <Route exact path="/" component={ProductList}/>
              <Route path="/details" component={Details}/>
              <Route path="/cart" component={Cart}/>
              <Route component={Default}/>
          </Switch>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default App;
