import React, { Component } from 'react';
import Product from './Product';
import { storeProducts } from '../data';

export default class ProductList extends Component {
  state = {
    products: storeProducts
  };
  
  render() {
    return (
      <div>
        <h3>Hello from Product List</h3>
      </div>
    )
  }
}
