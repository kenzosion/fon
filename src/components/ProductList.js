import React, { Component } from 'react';
import Product from './Product';
import { storeProducts } from '../data';

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };

  render() {
    console.log(this.state.products);

    return (
      <React.Fragment>
        <div className="py-5"></div>
      </React.Fragment>
    )
  }
}
