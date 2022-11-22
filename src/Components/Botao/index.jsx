import React from 'react';
import { ButtonCustom } from './styles'

const Button = ({
  type,
  text,
  onClick,
  disabled,
}) => {
  return ( 
    <ButtonCustom
      type={type}
      text={text}
      onClick={onClick}
      disabled={disabled}
      >
        {text}
    </ButtonCustom>
   );
}
 
export default Button;