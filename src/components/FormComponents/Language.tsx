import React, { useState } from 'react';
import Selector from './Select';

const LanguageSelector = () => {
  const languages = [
    { value: 'en', label: 'EN' },
    { value: 'fr', label: 'FR' },
    { value: 'ea', label: 'UA' },
    // Add more languages as needed
  ];

  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (newLanguage: string) => {
    setSelectedLanguage(newLanguage);
    // Perform any additional logic here based on the selected language
  };

  return (
    <Selector
      options={languages}
      selectedValue={selectedLanguage}
      onChange={handleLanguageChange}
    />
  );
};

export default LanguageSelector;