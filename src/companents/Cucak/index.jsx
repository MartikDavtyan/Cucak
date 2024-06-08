import React, { useState } from 'react';
import '../../css/Cucak/cucak.css';
import CucakEl from './cucakEl';

export default function Index() {
  const [cucak, setCucak] = useState([]);

  const handleAddCucak = () => {
    const value = document.querySelector('input').value;
    if(value != ''){
      document.querySelector('.i').value = '';
      setCucak([...cucak, value]);
    }else setCucak([...cucak]);
  };

  return (
    <div className="cucak">
      <div className="input">
        <input className='i' type="text" />
        <button onClick={handleAddCucak} className="b">
          Add
        </button>
      </div>
      <div className="elements">
        {cucak.map((el, index) => (
          <CucakEl key={index} text={el} />
        ))}
      </div>
    </div>
  );
}
