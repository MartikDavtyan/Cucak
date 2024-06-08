import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import '../../css/Cucak/cucak.css';
import CucakElement from './cucakEl';

const CucakIndex = () => {
  const [cucak, setCucak] = useState(JSON.parse(localStorage.getItem('cucak')));
  const inputRef = useRef(null);

  const handleAddCucak = () => {
    const inputValue = inputRef.current.value.trim();
    if (inputValue !== '') {
      const updatedCucak = [...cucak, inputValue];
      localStorage.setItem('cucak', JSON.stringify(updatedCucak));
      setCucak(updatedCucak);
      inputRef.current.value = '';
    }
  };

  const handleDelete = (index) => {
    const updatedCucak = cucak.filter((_, i) => i !== index);
    localStorage.setItem('cucak', JSON.stringify(updatedCucak));
    setCucak(updatedCucak);
  };

  return (
    <div className="cucak">
      <div className="input">
        <input className="i" type="text" ref={inputRef} />
        <button onClick={handleAddCucak} className="b">
          Add
        </button>
      </div>
      <div className="elements">
        {cucak.map((el, index) => (
          <CucakElement key={index} text={el} onDelete={() => handleDelete(index)} />
        ))}
      </div>
    </div>
  );
};

CucakIndex.propTypes = {
  text: PropTypes.string,
  i: PropTypes.number,
};

export default CucakIndex;
