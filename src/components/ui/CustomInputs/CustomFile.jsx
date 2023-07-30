import { Upload } from 'antd'
import React from 'react'
import { Camera } from '../../icons/Camera'

export const CustomFile = (props) => {
  return (
    <Upload {...props}>
      <div className="customFile">
        <Camera />
        <span className="customFile__label">Kies bestand</span>
      </div>
    </Upload>
  )
}
