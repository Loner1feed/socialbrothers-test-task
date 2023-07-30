import React from 'react';

import './ContentCard.scss';

export const ContentCard = ({ children }) => {
  return (
    <div className="contentCard">
      {children}
    </div>
  )
}
