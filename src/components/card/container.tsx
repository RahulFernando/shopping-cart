import React from 'react';
import { Card } from 'antd';

type Props = {
  children: React.ReactNode;
  cover: string;
};

const Container: React.FC<Props> = ({ children, cover }) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="example" src={cover} />}
      actions={[]}
    >
      {children}
    </Card>
  );
};

export default Container;
