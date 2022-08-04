import React from 'react';
import { CartItem } from '../components';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cart';
import { NavLink, Link } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch();

  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);
  const pizzas = Object.keys(items).map((key) => {
    return items[key].items[0];
  });
  const onClearCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearCart());
    }
  };
  const clearPizzaItem = (id) => {
     dispatch(removeCartItem(id));
  };
  const onPlusItem = (id) => {
    dispatch(plusCartItem(id))
  }
  const onMinusItem = (id) => {
    dispatch(minusCartItem(id))
  }
  
  return (
    <main className="basket-content">
      { pizzas.length > 0 ? (
        <div className="basket-container">
          <div className="basket-top">
            <div className="basket-top_left">
              <div className="left-logo">
                <img src="./basket.svg" alt="basket" className="basket-logo"></img>
              </div>
              <div className="left-text">Корзина</div>
            </div>
            <div className="basket-top_right">
              <div className="right-logo" onClick={onClearCart}>
                <img src="./trash.svg" alt="trash" className="trash-logo"></img>
              </div>
              <div className="right-text" onClick={onClearCart}>
                Очистить корзину
              </div>
            </div>
          </div>
          <div className="basket-main">
            {pizzas.map((obj) => (
              <CartItem
                id={obj.id}
                name={obj.name}
                type={obj.type}
                size={obj.size}
                finalPrice={items[obj.id].totalPrice}
                pizzaCount={items[obj.id].items.length}
                clearPizza={clearPizzaItem}
                plusItem = {onPlusItem}
                minusItem = {onMinusItem}
              />
            ))}
            
          </div>
          <div className="basket-total">
            <div className="basket-total_count">
              <div className="count-text">Всего пицц:</div>
              <div className="count-number">{totalCount} шт.</div>
            </div>
            <div className="basket-total_price">
              <div className="total-price_text">Сумма заказа:</div>
              <div className="total-price_amount">{totalPrice} ₽</div>
            </div>
          </div>
          <div className="basket-confirm">
            <button className="back">
              <div className="back-content">
                <div className="back-logo">
                  <img src="./grey-arrow-left.svg" alt="back arrow" className="back-logo-img"></img>
                </div>
                <Link to="/">
                  <div className="back-text">Вернуться назад</div>
                </Link>
              </div>
            </button>
            <button className="pay-button">
              <div className="pay-text">Оплатить сейчас</div>
            </button>
          </div>
        </div>
      ) : (
        <div className="empty-basket-content">
          <div className="basket-container">
            <div className="empty-basket-msg">
              <div className="empty-basket-msg_title">Корзина пустая</div>
              <div className="empty-basket-msg_text">
                Вероятнее всего, вы еще не заказали пиццу. <br></br>
                Для того, чтобы заказать пиццу, перейдите на главную страницу.
              </div>
              <div className="empty-basket-msg_img">
                <img src="./empty-cart.png" alt="emptybasket" class="empty-img"></img>
              </div>
              <Link to="/">
                <button className="empty-basket-msg_btn">Вернуться назад</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
export default Cart;
