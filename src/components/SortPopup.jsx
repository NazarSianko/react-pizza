import React from 'react';
import PropTypes from 'prop-types';

const SortPopup = React.memo(function SortPopup({ items, activeSortType, onClickSort }) {
  const [isOpen, setOpen] = React.useState(false);

  const sortRef = React.useRef();

  const activeLabel = items.find((obj) => obj.type === activeSortType).name;

  const handleOutsideClick = (e) => {
    const pathInAllBrowsers = e.path || (e.composedPath && e.composedPath());
    if (!pathInAllBrowsers.includes(sortRef.current)) {
      setOpen(false);
    }
  };
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);
  const togglePopup = () => setOpen(!isOpen);

  const onSelectedItem = (index) => {
    onClickSort(index);
    setOpen(false);
  };

  return (
    <div ref={sortRef} className="main-sort">
      <div className="sort-text">Сортировка по:</div>
      <div className="sort-choice" onClick={togglePopup}>
        <div className="choice"> {activeLabel}</div>
      </div>

      {isOpen && (
        <div className="sort-list">
          {items.map((obj, index) => (
            <div
              key={`${obj}_${obj.type}`}
              onClick={() => onSelectedItem(obj)}
              className={'sort-item' + ' ' + `${activeSortType === obj.type ? 'sort-active' : ''}`}>
              {obj.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});
SortPopup.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickSort: PropTypes.func.isRequired,
};

SortPopup.defaultProps = {
  items: [],
};
export default SortPopup;
