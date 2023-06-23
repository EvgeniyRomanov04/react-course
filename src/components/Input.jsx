import React, { useState } from 'react'

function Input() {
  const [value, setValue] = useState('TEXT')
  return (
    <div style={{ margin: '0 0 10px' }}>
      <h1>{value}</h1>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
    </div>
  )
}

export default Input