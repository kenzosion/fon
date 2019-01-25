import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button';


export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5">
        {/* 
          https://www.iconfinder.com/icons/1243689/call_phone_icon
          Creative Commons (Attribution 3.0 Unported);
          https://www.iconfinder.com/Makoto_msk */}
          <Link to='/'>
            <img src={logo} alt="phone" className="navbar-brand"/>
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to='/' className="nav-link text-white">
                Products
              </Link>
            </li>
          </ul>
              <Link to='/cart' className="ml-auto text-white">
                <ButtonContainer>
                  <i className="fas fa-cart-plus"/> Cart
                </ButtonContainer>
              </Link>
      </nav>
    );
  }
}


