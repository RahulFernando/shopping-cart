import React, { useEffect, useState } from 'react';
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
  const searchKeyword: Array<any> = useSelector(
    (state: any) => state.products.searchKeyword
  );
  const loading: boolean = useSelector(
    (state: any) => state.products.productData.loading
  );

  const [productList, setProductList] = useState<Array<any>>([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (products && products.length > 0) {
      setProductList(products);
    }
  }, [products]);

  useEffect(() => {
    if (searchKeyword && products && products.length > 0) {
      // filter products by keyword
      const filtered = productList.filter(
        (item) => item.name === searchKeyword
      );

      if (filtered.length > 0) {
        setProductList(filtered);
      } else {
        setProductList(products);
      }
    }

    // reset products
    if (!searchKeyword) {
      setProductList(products);
    }
  }, [searchKeyword]);

  return (
    <Row style={{ rowGap: '10px' }}>
      {productList.map((item, index) => (
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
