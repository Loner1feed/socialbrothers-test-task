import { Input } from 'antd';
import React from 'react';

import './customInputs.style.scss';

export const CustomInput = (props) => {
  return (
    <Input {...props} className="input" />
  )
}
