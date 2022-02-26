import React from 'react';
import { Button } from 'antd';
import { buttonHtmlTypes } from '../../enum/ui';

type Props = {
  loading: boolean;
  label: string;
  type: buttonHtmlTypes;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Container: React.FC<Props> = ({
  label,
  loading,
  type,
  className,
  onClick,
}) => {
  return (
    <Button
      loading={loading}
      className={className}
      htmlType={type}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default Container;
