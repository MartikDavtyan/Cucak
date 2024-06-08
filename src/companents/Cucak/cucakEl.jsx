import React from 'react';
import PropTypes from 'prop-types';
import '../../css/Cucak/cucakEl.css';

const CucakElement = ({ text, onDelete }) => {
  return (
    <div className="el">
      <div className="element">{text}</div>
      <input className="c" type="checkbox" />
      <button className="b" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

CucakElement.propTypes = {
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CucakElement;
