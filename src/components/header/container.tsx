import React from 'react';
import { useDispatch } from 'react-redux';
import { Layout, Menu, Input, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

// redux actions
import { onClose, onOpen } from '../../reducers/modal';

// style
import './style.css';

const { Header } = Layout;
const { Search } = Input;

const Container = () => {
  const dispatch = useDispatch();

  const loginClickHandler = () => {
    dispatch(onOpen());
  };

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item className="search-item">
          <Search className="header-search" />
        </Menu.Item>
        <Menu.Item onClick={loginClickHandler} style={{ marginLeft: 'auto' }}>
          Login
        </Menu.Item>
        <Menu.Item>
          <Badge count={3}>
            <ShoppingCartOutlined
              style={{ fontSize: '28px', color: 'white' }}
            />
          </Badge>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Container;
