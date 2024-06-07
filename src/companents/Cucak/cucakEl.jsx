import React from 'react'
import '../../css/Cucak/cucakEl.css'

export default function cucakEl({text}) {
  return (
    <>
      <div className="el">
        <div className='element'>{text}</div>
        <input className='c' type="checkbox" />
      </div>
    </>
  )
}
