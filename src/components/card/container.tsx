import React from 'react';
import { Card } from 'antd';

type Props = {
  children: React.ReactNode;
  cover: string;
  actions?: Array<React.ReactNode>;
};

const Container: React.FC<Props> = ({ children, cover, actions }) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="example" src={cover} />}
      actions={actions}
    >
      {children}
    </Card>
  );
};

export default Container;
