import React from 'react';
import { Row, Col } from 'antd';

// style
import './style.css';

type Props = {
  product: IProductCart;
};

const Container: React.FC<Props> = ({ product }) => {
  return (
    <div className="cart">
      <Row className="cart-item">
        <Col style={{ display: 'flex' }} span={20}>
          <img src={product.img} alt="alt" />
          <div className="item-detail">
            <h6>{product.name}</h6>
            <p>Rs 550</p>
          </div>
        </Col>
        <Col>
          <div>
            <p>{product.count} items</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Container;
