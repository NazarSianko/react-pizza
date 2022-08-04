import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(function Categories({ items, onClickCategory, activeCategory }) {
  const onSelectedItem = (index) => {
    onClickCategory(index);
  };

  return (
    <ul className="nav-list">
      <li
        onClick={() => onSelectedItem(null)}
        className={'nav-list__item' + ' ' + `${activeCategory === null ? 'choice-active' : ''}`}>
        Все
      </li>

      {items &&
        items.map((el, index) => (
          <li
            onClick={() => onSelectedItem(index)}
            key={`${el}_${index}`}
            className={
              'nav-list__item' + ' ' + `${activeCategory === index ? 'choice-active' : ''}`
            }>
            {el}
          </li>
        ))}
    </ul>
  );
});
Categories.propTypes = {
  activeCategory: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string),
  onClickCategory: PropTypes.func,
};
Categories.defaultProps = {
  items: [],
  activeCategory: null,
};
export default Categories;
