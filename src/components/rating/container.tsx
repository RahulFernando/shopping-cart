import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarRating from 'react-svg-star-rating';
import { Form } from 'antd';

// ui components
import Modal from '../modal';
import Button from '../button';

// redux actions
import { updateProduct } from '../../reducers/products';
import { onIsRateClose } from '../../reducers/modal';

// enums
import { buttonHtmlTypes } from '../../enum/ui';

type Props = {
  isVisible: boolean;
  product: IProduct;
};

const Container: React.FC<Props> = ({ isVisible, product }) => {
  const dispatch = useDispatch();

  const loading = useSelector(
    (state: any) => state.products.ratingData.loading
  );

  const [form] = Form.useForm();
  const [rating, setRating] = useState(0);

  const ratingHandler = (rating: number) => {
    setRating(rating);
  };

  const submitFormHandler = () => {
    const obj = {
      ...product,
      rating: [...product.rating, rating],
    };

    dispatch(updateProduct(obj));
  };

  return (
    <Modal
      title="Rate this product"
      onCancel={() => dispatch(onIsRateClose())}
      isVisible={isVisible}
      footer={[
        <Button
          type={buttonHtmlTypes.submit}
          label="Submit"
          loading={loading}
          onClick={submitFormHandler}
        />,
      ]}
    >
      <Form form={form}>
        <Form.Item>
          <StarRating handleOnClick={ratingHandler} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Container;
