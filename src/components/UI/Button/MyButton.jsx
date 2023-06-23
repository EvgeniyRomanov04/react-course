import React from 'react'
import style from './myButton.module.css'

function MyButton({children, ...props}) {
  return (
    <button className={style['btn']} {...props}>{children}</button>
  )
}

export default MyButton