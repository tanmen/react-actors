import React, {FC, InputHTMLAttributes} from "react";
import styled from "styled-components";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
}

const Input: FC<Props> = (props) =>
  <SInput {...props}/>;

export default Input;

const SInput = styled.input`
display: block;
width: 100%;
height: calc(1.5em + .75rem + 2px);
padding: .375rem .75rem;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #495057;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
border-radius: .25rem;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
&:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
}
`;
