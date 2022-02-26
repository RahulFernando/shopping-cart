import React from 'react';
import { Button } from 'antd';
import { buttonHtmlTypes } from '../../enum/ui';

type Props = {
  loading: boolean;
  label: string;
  type: buttonHtmlTypes;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Container: React.FC<Props> = ({ label, loading, type, onClick }) => {
  return (
    <Button loading={loading} htmlType={type} onClick={onClick}>
      {label}
    </Button>
  );
};

export default Container;
