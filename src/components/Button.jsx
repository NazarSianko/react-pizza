import React from 'react';
import classNames from 'classnames';
function Button({ className, onClick, children }) {
  return (
    <button onClick={onClick} className={classNames(className)}>
      {children}
    </button>
  );
}
export default Button;
