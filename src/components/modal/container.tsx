import React from 'react';
import { Modal } from 'antd';

type Props = {
  title: string;
  isVisible: boolean;
  footer: Array<any>;
  children: React.ReactNode;
  onCancel: () => void;
};

const Container: React.FC<Props> = ({
  title,
  isVisible,
  footer,
  children,
  onCancel,
}) => {
  return (
    <Modal
      className="login-form"
      title={title}
      visible={isVisible}
      onCancel={onCancel}
      footer={footer}
    >
      {children}
    </Modal>
  );
};

export default Container;
