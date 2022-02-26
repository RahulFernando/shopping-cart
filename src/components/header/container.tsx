import { useDispatch } from 'react-redux';
import { Layout, Menu, Input, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

// context
import AuthContext from '../../context/auth.context';

// redux actions
import { onOpen } from '../../reducers/modal';
import { setSearchKeyword } from '../../reducers/products';

// style
import './style.css';
import { useContext } from 'react';

const { Header } = Layout;
const { Search } = Input;

const Container = () => {
  const dispatch = useDispatch();
  const ctx = useContext(AuthContext);

  const loginClickHandler = () => {
    dispatch(onOpen());
  };

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchKeyword(event.target.value));
  };

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item className="search-item">
          <Search className="header-search" onChange={searchHandler} />
        </Menu.Item>
        {!ctx.isLoggedIn && (
          <Menu.Item onClick={loginClickHandler} style={{ marginLeft: 'auto' }}>
            Login
          </Menu.Item>
        )}
        {ctx.isLoggedIn && (
          <Menu.Item onClick={ctx.onLogout} style={{ marginLeft: 'auto' }}>
            Logout
          </Menu.Item>
        )}
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
