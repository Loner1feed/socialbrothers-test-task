import React from 'react';
import { Input } from 'antd';

import './customInputs.style.scss';

const { TextArea } = Input;

export const CustomTextArea = (props) => (
  <TextArea className="input" {...props} />
)
