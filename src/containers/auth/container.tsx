import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'antd';

// ui components
import Modal from '../../components/modal';
import Input from '../../components/input';
import Button from '../../components/button';

// redux actions
import { onClose } from '../../reducers/modal';

const loginForm = [
  {
    type: 'string',
    placeholder: 'Email',
    name: 'email',
    required: true,
    message: 'Please enter email',
  },
  {
    type: 'password',
    placeholder: 'Password',
    name: 'password',
    required: true,
    message: 'Please enter password',
  },
];

const registerForm = [
  {
    type: 'string',
    placeholder: 'Email',
    name: 'email',
    required: true,
    message: 'Please enter email',
  },
  {
    type: 'string',
    placeholder: 'Phone Number',
    name: 'tel',
    required: true,
    message: 'Please enter phone number',
  },
  {
    type: 'password',
    placeholder: 'Password',
    name: 'password',
    required: true,
    message: 'Please enter password',
  },
];

const Container = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector((state: any) => state.modal.isVisible);

  const [isLogin, setIsLogin] = useState(false);

  const optionClickHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Modal
      isVisible={isVisible}
      onCancel={() => dispatch(onClose())}
      title={isLogin ? 'Login' : 'Signup'}
      footer={[
        <Button
          label={isLogin ? 'Login' : 'Signup'}
          loading={false}
          onClick={(e) => {}}
        />,
      ]}
    >
      {isLogin &&
        loginForm.map((item, index) => (
          <div className="form-input">
            <Form.Item
              name={item.name}
              rules={[{ required: item.required, message: item.message }]}
            >
              <Input
                key={index}
                type={item.type}
                placeholder={item.placeholder}
                value=""
                name={item.name}
                onChange={(e) => {}}
              />
            </Form.Item>
          </div>
        ))}
      {!isLogin &&
        registerForm.map((item, index) => (
          <div className="form-input">
            <Form.Item
              name={item.name}
              rules={[{ required: item.required, message: item.message }]}
            >
              <Input
                key={index}
                type={item.type}
                placeholder={item.placeholder}
                value=""
                name={item.name}
                onChange={(e) => {}}
              />
            </Form.Item>
          </div>
        ))}
      <div className="form-options">
        {isLogin && (
          <p>
            Not a member? <span onClick={optionClickHandler}>Signup</span>{' '}
          </p>
        )}
        {!isLogin && (
          <p>
            Already a member? <span onClick={optionClickHandler}>Login</span>{' '}
          </p>
        )}
      </div>
    </Modal>
  );
};

export default Container;
