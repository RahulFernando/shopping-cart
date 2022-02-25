import React from 'react';
import { Card } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';

type Props = {
  children: React.ReactNode;
  cover: string;
};

const Container: React.FC<Props> = ({ children, cover }) => {
  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt="example" src={cover} />}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      {children}
    </Card>
  );
};

export default Container;
