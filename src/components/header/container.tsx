import { useDispatch, useSelector } from 'react-redux';
import { Layout, Menu, Input, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

// context
import AuthContext from '../../context/auth.context';

// redux actions
import { onOpen } from '../../reducers/modal';
import { setSearchKeyword } from '../../reducers/products';
import { setCartVisibility } from '../../reducers/cart';

// style
import './style.css';
import { useContext } from 'react';

const { Header } = Layout;
const { Search } = Input;

const Container = () => {
  const dispatch = useDispatch();
  const ctx = useContext(AuthContext);

  const cartData: Array<any> = useSelector(
    (state: any) => state.cart.cartData.data
  );
  const loginClickHandler = () => {
    dispatch(onOpen());
  };

  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchKeyword(event.target.value));
  };

  const onCartItemClick = () => {
    dispatch(setCartVisibility(true));
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
        {ctx.isLoggedIn && (
          <Menu.Item onClick={onCartItemClick}>
            <Badge count={cartData && cartData.length}>
              <ShoppingCartOutlined
                style={{ fontSize: '28px', color: 'white' }}
              />
            </Badge>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
};

export default Container;
