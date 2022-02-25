import React from 'react';
import { Button } from 'antd';

type Props = {
  loading: boolean;
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Container: React.FC<Props> = ({ label, loading, onClick }) => {
  return (
    <Button loading={loading} onClick={onClick}>
      {label}
    </Button>
  );
};

export default Container;
