import React from 'react';
import { Layout } from 'antd';

// components
import AppHeader from '../components/header';
// import Modal from '../components/modal';

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout className="layout">
      <AppHeader />
      <Content></Content>
    </Layout>
  );
};

export default AppLayout;
