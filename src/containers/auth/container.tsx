import React, { useContext, useEffect, useState } from 'react';
import queryString from 'query-string';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'antd';

// context
import AuthContext from '../../context/auth.context';

// ui components
import Modal from '../../components/modal';
import Input from '../../components/input';
import Button from '../../components/button';

// redux actions
import { onClose } from '../../reducers/modal';
import { loginUser, loginUserFailure, registerUser } from '../../reducers/auth';
import { fetchCart } from '../../reducers/cart';

// enums
import { buttonHtmlTypes } from '../../enum/ui';

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
  const ctx = useContext(AuthContext);

  const isVisible = useSelector((state: any) => state.modal.isVisible);
  const loginError = useSelector((state: any) => state.auth.loginData.error);
  const loginData: Array<IAuthUser> = useSelector(
    (state: any) => state.auth.loginData.data
  );
  const registerData: IAuthUser = useSelector(
    (state: any) => state.auth.registerData.data
  );

  const [isLogin, setIsLogin] = useState(true);
  const [login, setLogin] = useState<any>({ email: '', password: '' });
  const [register, setRegister] = useState<any>({
    email: '',
    phone_number: '',
    password: '',
  });

  const [form] = Form.useForm();

  useEffect(() => {
    // if login unsuccessful
    if (loginData && loginData.length === 0) {
      dispatch(loginUserFailure('Invalid Login'));

      setTimeout(() => {
        dispatch(loginUserFailure(''));
      }, 2000);
    }

    // if login success
    if (loginData && loginData.length > 0) {
      if (loginData[0].id) {
        ctx.onLogin(loginData[0].id.toString());
        dispatch(fetchCart(loginData[0].id));
      }
      dispatch(onClose());
    }
  }, [loginData]);

  useEffect(() => {
    // if registration success
    if (registerData) {
      setIsLogin(true);
    }
  }, [registerData]);

  // option click handler
  const optionClickHandler = () => {
    setIsLogin(!isLogin);
  };

  /**
   * handle login form input change
   * @param {ChangeEvent} event
   */
  const onLoginInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setLogin((previous: any) => {
      return { ...previous, [name]: value };
    });
  };

  /**
   * handle register form input change
   * @param {ChangeEvent} event
   */
  const onRegisterInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setRegister((previous: any) => {
      return { ...previous, [name]: value };
    });
  };

  // handle form submit
  const submitFormHandler = () => {
    form
      .validateFields()
      .then((values: any) => {
        if (isLogin) {
          const params = queryString.stringify(values);
          dispatch(loginUser(params));
          form.resetFields();
        }

        if (!isLogin) {
          const obj: IAuthUser = { ...values, cart: [] };
          dispatch(registerUser(obj));
          form.resetFields();
        }
      })
      .catch((info: any) => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      isVisible={isVisible}
      onCancel={() => dispatch(onClose())}
      title={isLogin ? 'Login' : 'Signup'}
      footer={[
        <Button
          type={buttonHtmlTypes.submit}
          label={isLogin ? 'Login' : 'Signup'}
          loading={false}
          onClick={submitFormHandler}
        />,
      ]}
    >
      <Form form={form}>
        {loginError && <p className="error-text">{loginError}</p>}
        {isLogin &&
          loginForm.map((item, index) => {
            return (
              <div className="form-input">
                <Form.Item
                  name={item.name}
                  rules={[{ required: item.required, message: item.message }]}
                >
                  <Input
                    key={index}
                    type={item.type}
                    placeholder={item.placeholder}
                    value={login[item.name]}
                    name={item.name}
                    onChange={onLoginInputChangeHandler}
                  />
                </Form.Item>
              </div>
            );
          })}
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
                  value={register[item.name]}
                  name={item.name}
                  onChange={onRegisterInputChangeHandler}
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
        <div className="form-actions">
          <Form.Item></Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default Container;
