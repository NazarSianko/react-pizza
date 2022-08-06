import React from 'react';
import PropTypes from 'prop-types';
import FilterPopUp from './FilterPopUp';
import Button from './Button';

const Categories = React.memo(function Categories({ items, onClickCategory, activeCategory }) {
  const onSelectedItem = (index) => {
    onClickCategory(index);
  };
  const [filterFlag, stateFilterFlag] = React.useState(false);
  const toggleFilter = () => stateFilterFlag(!filterFlag)
   
 
 
 

  return (
    
      <div className='categories'>
        <ul className="nav-list">
          <li
            onClick={() => onSelectedItem(null)}
            className={
              'nav-list__item' + ' ' + `${activeCategory === null ? 'choice-active' : ''}`
            }>
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
        <Button className='popup-button' onClick={toggleFilter}> Категории </Button>
        {filterFlag && <FilterPopUp filterClick={onSelectedItem} activeFilterCategory={activeCategory}  array = {items} flag = {stateFilterFlag}/>}
        </div>
        
   
   

  

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
