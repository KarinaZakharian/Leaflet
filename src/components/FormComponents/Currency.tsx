import React, { useState } from 'react';
import Selector from './Select';

const CurrencySelector = ({ selectedCurrency, setSelectedCurrency }) => {
  const currencies = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'UAN', label: 'UAN' },
    // Add more currencies as needed
  ];



  const handleCurrencyChange = (newCurrency) => {
    setSelectedCurrency(newCurrency);
    // Perform any additional logic here based on the selected currency
  };

  return (
    <Selector
      options={currencies}
      selectedValue={selectedCurrency}
      onChange={handleCurrencyChange}
    />
  );
};

export default CurrencySelector;