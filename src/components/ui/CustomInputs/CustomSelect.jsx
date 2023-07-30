import { Select } from 'antd';
import React from 'react';

import './customInputs.style.scss';
import { ArrowDown } from '../../icons/ArrowDown';

export const CustomSelect = (props) => {
  return (
    <Select
      className="select"
      suffixIcon={<ArrowDown />}
      {...props}
      />
  )
}


CustomSelect.Option = Select.Option;