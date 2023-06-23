import React from 'react'

function MySelect({ options, defaultValue, value, onChange }) {
    return (
        <select
            value={value}
            onChange={(event) => onChange(event.target.value)}
        >
            <option disabled defaultValue={''} selected>{defaultValue}</option>
            {options.map((el) => {
                return (
                    <option key={el.value} value={el.value}>{el.name}</option>
                )
            })}
        </select>
    )
}

export default MySelect