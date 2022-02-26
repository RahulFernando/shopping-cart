import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import ClipLoader from 'react-spinners/ClipLoader';

// ui components
import Product from '../../components/product';

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
  const searchKeyword: string = useSelector(
    (state: any) => state.products.searchKeyword
  );
  const loading: boolean = useSelector(
    (state: any) => state.products.productData.loading
  );

  const [productList, setProductList] = useState<Array<IProduct>>([]);

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
      {productList &&
        productList.map((item, index) => (
          <Col className="items-card">
            <Product key={index} item={item} />
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
