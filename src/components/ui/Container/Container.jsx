import React from 'react';

import './container.style.scss';

export const Container = ({ children, customClassName }) => {
  return (
    <div className={"container " + customClassName}>
      {children}
    </div>
  )
}
