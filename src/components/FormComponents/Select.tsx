import React, { ChangeEvent } from 'react';
import './FormComponents.scss'


interface Option {
  value: string;
  label: string;
}

interface SelectorProps {
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const Selector: React.FC<SelectorProps> = ({ options, selectedValue, onChange }) => {
  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <select className="select" value={selectedValue} onChange={handleSelectionChange}>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Selector;