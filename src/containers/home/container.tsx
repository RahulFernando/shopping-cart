import React from 'react';
import { Row, Col } from 'antd';

import Card from '../../components/card';

// style
import './style.css';

const data = [
  {
    cover:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
  },
  {
    cover:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
  },
  {
    cover:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
  },
  {
    cover:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
  },
  {
    cover:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
  },
  {
    cover:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
  },
  {
    cover:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
  },
  {
    cover:
      'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
  },
];

const Container: React.FC = () => {
  return (
    <Row style={{ rowGap: '10px' }}>
      {data.map((item, index) => (
        <Col className="items-card">
          <Card key={index} cover={item.cover}>
            <h1>Hello</h1>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Container;
