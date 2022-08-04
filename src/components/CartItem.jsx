import React from 'react';
import { minusCartItem } from '../redux/actions/cart';

function CartItem({
  id,
  name,
  type,
  size,
  finalPrice,
  pizzaCount,
  clearPizza,
  plusItem,
  minusItem,
}) {
  const handlePizza = () => {
    clearPizza(id);
  };
  const handlePlusItem = () => {
    plusItem(id);
  };
  const handleMinusItem = () => {
    minusItem(id);
  };

  return (
    <div className="basket-main_item">
      <div className="main_item_left">
        <img src="./smallpizza.png" alt="smallpizza" className="small-pizza"></img>
        <div className="main_item_text">
          <div className="main_item_text_top">{name}</div>
          <div className="main_item_text_bot">
            {type} тесто, {size}см
          </div>
        </div>
      </div>

      <div className="main_item_count">
        <div className="minus" onClick={handleMinusItem}>
          <img src="./minus.svg" alt="minus" className="minus-icon"></img>
        </div>
        <div className="count">{pizzaCount}</div>
        <div className="plus" onClick={handlePlusItem}>
          <img src="./plus.svg" alt="plus" className="plus-icon"></img>
        </div>
      </div>
      <div className="main_item_price">{finalPrice} ₽</div>
      <div className="main_item_delete" onClick={handlePizza}>
        <img src="./Group 36.svg" alt="" className="delete-icon"></img>
      </div>
    </div>
  );
}

export default CartItem;
