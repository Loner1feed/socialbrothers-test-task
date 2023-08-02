import { Button, Pagination } from 'antd';
import React from 'react';

import './customPagination.style.scss';
import { ArrowRight } from '../../icons/ArrowRight';


const itemRender = (_, type, originalElement) => {
  if (type === "prev") return null;

  if (type === "next") return <Button type="text" className="pagination__nextBtn">Volgende pagina <ArrowRight /></Button>

  if (type === "jump-next") return <span>...</span>

  if (type === "jump-prev") return <span>...</span>

  return originalElement;
}

export const CustomPagination = (props) => {
  return (
    <Pagination className="pagination" itemRender={itemRender} {...props}/>
  )
}
