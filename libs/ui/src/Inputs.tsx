import styled from '@emotion/styled';
import { Flex, Text } from '@sillok/design-token';
import React, { useState } from 'react';
import { Eyes } from './assets';

interface IInputType {
  label?: string;
  placeholder?: string;
  isPwd?: boolean;
  width?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Inputs = ({
  value,
  label,
  width,
  placeholder,
  isPwd,
  onChange,
}: IInputType) => {
  const [isEye, setIsEye] = useState<boolean>(false);

  const eyeClick = () => {
    setIsEye(!isEye);
  };
  return (
    <Flex isColumn={true} gap={8}>
      <Text>{label}</Text>
      <Flex position="relative">
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          width={width}
          type={isEye ? 'password' : 'text'}
        />
        {isPwd && <Eyes onClick={eyeClick} isEye={isEye} />}
      </Flex>
    </Flex>
  );
};

const Input = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #c7c7c7;
  padding-left: 16px;
  display: flex;
  align-items: center;
  background-color: #fdfdfd;
  font-size: 16px;
  font-weight: 500;
  color: #000000;
  &::placeholder {
    font-weight: 300;
    color: #c7c7c7;
  }
`;
