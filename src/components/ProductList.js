import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';

export default class ProductList extends Component {
  state = {
    products: []
  };

  render() {
    console.log(this.state.products);

    return (
      <React.Fragment>
        <div className="py-5">
         <div className="container">
          <Title name="out" title="products" />
         </div>
          <div className="row">
          </div>
        </div>
      </React.Fragment>
    )
  }
}
