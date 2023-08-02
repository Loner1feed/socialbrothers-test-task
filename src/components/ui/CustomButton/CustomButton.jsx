import { Button } from 'antd';
import React from 'react';

import './customButton.style.scss';

export const CustomButton = (props) => (
  <Button className="button" {...props} >{props.children}</Button>
)
