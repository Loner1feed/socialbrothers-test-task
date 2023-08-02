import React from 'react';

import './postCard.style.scss';
import { ImgBg } from '../ImgBg/ImgBg';
import { DateTime } from 'luxon';

export const PostCard = ({ data }) => {

  const { title, content, img_url, created_at, category } = data;

  return (
    <div className="postCard">
      <div className="postCard__header">
        <ImgBg imgPath={`${process.env.REACT_APP_API_BASE_URL}/storage/${img_url}`} customClassName="postCard__bg" />
        <span>{DateTime.fromISO(created_at).toFormat("MM-dd-yyyy")}</span>
        <span>{category.name}</span>
      </div>
      <div className="postCard__content">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  )
}
