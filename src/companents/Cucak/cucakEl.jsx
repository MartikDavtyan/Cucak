import PropTypes from 'prop-types';
import React, { useState, useEffect, useRef } from 'react';
import '../../css/Cucak/cucakEl.css';

const CucakElement = ({ text, onDelete }) => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  function compliteClick() {
    if (buttonRef.current.textContent == 'complete') {
      buttonRef.current.textContent = 'completed'
      textRef.current.style.textDecoration = 'line-through'
    }else{
      buttonRef.current.textContent = 'complete'
      textRef.current.style.textDecoration = 'none'
    }
  } 
  return (
    <div className="el">
      <div ref={textRef} className="element">{text}</div>
      <button onClick={compliteClick} className='b' ref={buttonRef}>complete</button>
      <button className="b" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};
export default CucakElement;
