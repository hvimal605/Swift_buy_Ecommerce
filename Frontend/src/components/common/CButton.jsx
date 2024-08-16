import React from 'react'

const CButton = ({text, color}) => {
  return (
    <div>
        <button className={`${color} p-2 rounded-md hover:scale-95 `}>{text}</button>
    </div>
  )
}

export default CButton