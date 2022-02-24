import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

// redux actions
import { onClose } from '../../reducers/modal';

const Container: React.FC = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state: any) => state.modal.isVisible);

  return (
    <Modal
      title="Login"
      visible={isVisible}
      onCancel={() => dispatch(onClose())}
    ></Modal>
  );
};

export default Container;
