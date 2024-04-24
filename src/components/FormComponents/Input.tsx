import { useState } from 'react';


interface InputProps {
  name: string;
  placeholder: string;
  classname: string;
  img: React.ReactNode;
  [prop: string]: unknown;
}

function Input({ name, placeholder,img, classname, ...props }: InputProps) {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValue(target.value);
    target.style.borderColor = 'initial';
  };

  // console.log(name, value);

  return (
    <div className="input">
       
    {/* Place the img element inside the input element */}
    <input
      placeholder={placeholder}
      className={`${classname} input__field `}
      name={name}
      value={value}
      onChange={handleChange}
      {...props}
      required
    />
     <div className="input__icon">{img}</div>
    {/* Use the img element here */}
   
  </div>
);

}

export default Input;
