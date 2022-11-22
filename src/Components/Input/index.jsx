import React from 'react';
import { InputCustomizado as InputCustom } from './styles'

const Input = ({
  name,
  placeholder,
  onChange,
  type
}) => {
  return ( 
    <InputCustom
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
   );
}
 
export default Input;