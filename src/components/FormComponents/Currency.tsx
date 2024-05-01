import React, { useState } from 'react';
import Selector from './Select';

interface Currency{
  selectedCurrency : string;
  setSelectedCurrency: React.Dispatch<React.SetStateAction<string>>
}

const CurrencySelector = ({ selectedCurrency, setSelectedCurrency}:Currency) => {
  const currencies = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'UAN', label: 'UAN' },
    // Add more currencies as needed
  ];



  const handleCurrencyChange = (newCurrency: string) => {
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