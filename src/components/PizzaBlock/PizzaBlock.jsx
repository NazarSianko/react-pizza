import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import LoadingBlock from './LoadingPizzaBlock';
import Button from '../Button';
import { act } from 'react-dom/test-utils';
function PizzaBlock({ id, name, imageUrl, price, sizes, types, onClickAddPizza, addedCount }) {
  const typeNames = ['Тонкое', 'Традиционное'];
  const availableSizes = [26, 30, 40];
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(availableSizes.indexOf(sizes[0]));

  const onActiveSize = (index) => {
    setActiveSize(index);
  };

  const onActiveType = (index) => {
    setActiveType(index);
  };
  const onAddPizza = () => {
    const obj = {
      id,
      price,
      imageUrl,
      name,
      size: sizes[activeSize],
      type: typeNames[activeType],
    };
    onClickAddPizza(obj);
  };

  return (
    <div className="pizza-menu__item">
      <div className="item-image">
        <img className="pizza" src={imageUrl} alt="piza"></img>
      </div>
      <h2 className="item-title">{name}</h2>
      <div className="item-choice">
        <div className="dough-choice">
          {typeNames.map((el, index) => (
            <div
              key={el}
              onClick={() => onActiveType(index)}
              className={classNames('dough', {
                active: activeType === index,
                disabled: !types.includes(index),
              })}>
              {el}
            </div>
          ))}
        </div>
        <div className="size-choice">
          {availableSizes.map((el, index) => (
            <div
              key={el}
              onClick={() => onActiveSize(index)}
              className={classNames('size', {
                active: activeSize === index,
                disabled: !sizes.includes(el),
              })}>
              {el} см.
            </div>
          ))}
        </div>
      </div>
      <div className="item-bottom">
        <div className="item-price">от {price} ₽ </div>
        <Button onClick={onAddPizza} className="item-add">
          + Добавить
          {addedCount && <span>{addedCount}</span>}
        </Button>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  onAddPizza: PropTypes.func,
  addedCount: PropTypes.number,
};
PizzaBlock.defaultProps = {
  name: '-',
  price: 0,
  types: [],
  sizes: [],
};
export default PizzaBlock;
