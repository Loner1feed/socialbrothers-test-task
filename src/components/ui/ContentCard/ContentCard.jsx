import React from 'react';

import './ContentCard.scss';

export const ContentCard = ({ children, customClassName }) => {
  return (
    <div className={`contentCard ${customClassName}`}>
      {children}
    </div>
  )
}
