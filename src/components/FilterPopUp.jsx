import React from 'react'

function FilterPopUp({array}) {
    console.log(array)
  return (
    <div className='popup-filter'>
        <div className='filter-item'>
            Все
          </div>
        { array.map((el, index) => (
         <div
         key={`${el}`}
         className={'filter-item'}>
         {el}
       </div>
      ))}</div>
  )
}

export default FilterPopUp