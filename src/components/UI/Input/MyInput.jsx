import React, { forwardRef } from 'react'
import style from './MyInput.module.css'

const MyInput = forwardRef((props, ref) => {
  return (
    <input {...props} ref={ref} className={style['input']} />
  )
})

export default MyInput