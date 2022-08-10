import React from 'react';
import logo from '../assets/img/pizza-logo.svg';
import { NavLink, Link } from 'react-router-dom';
import { Button } from '../components';
import { useSelector } from 'react-redux';
function Header() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);
  return (
    <NavLink to="/">
      {' '}
      <header className="header">
        <div className="header-top">
          <div className="header-top__title">
            <div className="title-logo">
              <img src={logo} alt="logo" className="logo"></img>
            </div>

            <div className="title-text">
              <div className="text-top">REACT PIZZA</div>
              <div className="text-bot">самая вкусная пицца во вселенной</div>
            </div>
          </div>

          <NavLink to="/cart">
            {' '}
            <Button className="header-top__basket">
              <div className="basket-price">{totalPrice} ₽</div>
              <div className="basket-total">
                {totalCount}
                <div className="cart-svg">
                  <img src="./shopping.svg" alt="" className="trash" />
                </div>
              </div>
            </Button>
          </NavLink>
        </div>
      </header>
    </NavLink>
  );
}
export default Header;
