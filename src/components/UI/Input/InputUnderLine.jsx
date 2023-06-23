import React, { useEffect } from 'react'
import style from './InputUnderLine.module.css'

function InputUnderLine({ placeholder, ...props }) {

    const inputHandler = (e) => {
        if (e.target.value.length === 0) {
            // e.target.validity.valid(false)
            // console.log(e)
        }
        props.onChange(e)
    }

    return (
        <div className={style['input-underline']}>
            <input type='text' {...props} onChange={(e) => inputHandler(e)} />
            <label htmlFor={props.id}>{placeholder ? placeholder : 'Ввод'}</label>
            <span></span>
        </div>
    )
}

export default InputUnderLine;