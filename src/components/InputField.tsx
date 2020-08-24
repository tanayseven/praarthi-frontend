import styled from "styled-components";
import React from "react";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  
  input:placeholder-shown + label {
    opacity: 0;
    animation: ease-in-out;
    transition: opacity 0.5s;
  }
  
  input + label {
    opacity: 100%;
    animation: ease-in-out;
    transition: opacity 0.5s;
  }
`

interface InputFieldProps {
  type: string | undefined;
  name: string;
  label: string;
}

export default function InputField(props: InputFieldProps) {
  return (
    <InputContainer>
      <input type={props.type} name={props.name} placeholder={props.label} />
      <label htmlFor={props.name}>{props.label}</label>
    </InputContainer>
  )
}
