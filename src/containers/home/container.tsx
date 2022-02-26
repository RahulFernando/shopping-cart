import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import ClipLoader from 'react-spinners/ClipLoader';

// ui components
import Card from '../../components/card';

// redux actions
import { fetchProducts } from '../../reducers/products';

// style
import './style.css';
import { useDispatch, useSelector } from 'react-redux';

const Container: React.FC = () => {
  const dispatch = useDispatch();
  const products: Array<any> = useSelector(
    (state: any) => state.products.productData.data
  );
  const loading: boolean = useSelector(
    (state: any) => state.products.productData.loading
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Row style={{ rowGap: '10px' }}>
      {products &&
        products.length > 0 &&
        products.map((item, index) => (
          <Col className="items-card">
            <Card key={index} cover={item.img}>
              <h1>{item.name}</h1>
            </Card>
          </Col>
        ))}
      {loading && (
        <div className="clip-loader">
          <ClipLoader />
        </div>
      )}
    </Row>
  );
};

export default Container;
