import React from 'react';
import { Layout } from 'antd';

// components
import AppHeader from '../components/header';
import AuthModal from '../containers/auth';
import CartModal from '../components/cart';
import RatingModal from '../components/rating';

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout className="layout">
      <AppHeader />
      <Content>
        <AuthModal />
        <CartModal />
        <RatingModal />
        {children}
      </Content>
    </Layout>
  );
};

export default AppLayout;
