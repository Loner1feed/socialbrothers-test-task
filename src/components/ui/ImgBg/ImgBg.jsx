import React from 'react';
import './imgBg.style.scss';

export const ImgBg = ({ imgPath, customClassName }) => {
  return (
    <div className={"imgBg " + customClassName}>
      <img src={imgPath} alt="" />
    </div>
  )
}
