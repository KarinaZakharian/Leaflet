import { useState } from 'react';

import './FormComponents.scss';

interface InputProps {
  // je dois avoir une _prop_ `name` : une chaîne de caractères
  label: string;
  placeholder: string;
  name: string;
}

function TextareaInput({ name, label, placeholder }: InputProps) {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="input">
     
      <textarea
        className="input__field"
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
       
      />
    </div>
  );
}

export default TextareaInput;
