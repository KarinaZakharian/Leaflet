import { useState } from 'react';

import './FormComponents.scss';

interface InputProps {
  label: string;
  placeholder: string;
  name: string;
}

function TextareaInput({ name, label, placeholder }: InputProps) {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
