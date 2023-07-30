import React from 'react';
import './imgBg.style.scss';

export const ImgBg = ({ imgPath }) => {
  return (
    <div className="imgBg">
      <img src={imgPath} alt="" />
    </div>
  )
}
