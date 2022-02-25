import React from 'react';
import { Input } from 'antd';

type Props = {
  type: string;
  placeholder: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Container: React.FC<Props> = ({
  type,
  placeholder,
  value,
  name,
  onChange,
}) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default Container;
