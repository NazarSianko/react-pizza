import React from 'react';
import {Link, animateScroll} from 'react-scroll';

function UpArrow() {

    const scrollTop = () => {
        animateScroll.scrollToTop();
        
    }
  return (
   
    <div className="uparrow" onClick={()=>scrollTop()}>
    <img src="./uparrow.png" alt="uparrow" />

  </div>
  )
}

export default UpArrow