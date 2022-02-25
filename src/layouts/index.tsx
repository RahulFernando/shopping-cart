import React from 'react';
import { Layout } from 'antd';

// components
import AppHeader from '../components/header';
import AuthModal from '../containers/auth';

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
        {children}
      </Content>
    </Layout>
  );
};

export default AppLayout;
