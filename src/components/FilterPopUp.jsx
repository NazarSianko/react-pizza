import React from 'react';


function FilterPopUp({array,filterClick,activeFilterCategory, flag}) {

  const onFilterClick = (index) => {
    filterClick(index)
    flag(false);
  }
  return (

    <div className='popup-filter'>
        <div  className={'filter-item' + ' ' + `${activeFilterCategory === null ? 'filter-active' : ''}` }  onClick={()=>onFilterClick(null)}>
            Все
          </div>
        { array.map((el, index) => (
         <div
         key={`${el}`}
         onClick={()=>onFilterClick(index)}   
         className={'filter-item' + ' ' + `${activeFilterCategory === index ? 'filter-active' : ''}` }>
         {el}
       </div>
      ))}</div>
  )
}

export default FilterPopUp