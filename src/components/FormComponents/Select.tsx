import React from 'react';
import './FormComponents.scss'

const Selector = ({ options, selectedValue, onChange }) => {
  const handleSelectionChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <select className="select"value={selectedValue} onChange={handleSelectionChange}>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Selector;