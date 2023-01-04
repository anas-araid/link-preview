import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components'

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>
}

const Input = ({ value, onChange }: Props) => {
  return (
    <InputText type="text" value={value} onChange={onChange} />
  )
}

const InputText = styled.input`
  width: 260px;
  outline: 0;
  border-width: 0 0 2px;
  border-color: #d4d4d4;
  border-style: solid;
  transition: border-color 0.5s;
  line-height: 24px;
  font-size: 16px;
  font-weight: 500;
  color: black;
  &:focus {
    outline: 0;
    border-width: 0 0 2px;
    border-color: black;
    border-style: solid;
  }
`

export default Input;