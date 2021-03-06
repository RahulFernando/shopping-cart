import React, { useState } from 'react';
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

const Container: React.FC = () => {
  const dispatch = useDispatch();

  const loading = useSelector(
    (state: any) => state.products.ratingData.loading
  );
  const product: IProduct = useSelector(
    (state: any) => state.products.selectedProduct
  );
  const isVisible = useSelector((state: any) => state.modal.isRateVisible);

  const [form] = Form.useForm();
  const [rating, setRating] = useState(0);

  // rating handler
  const ratingHandler = (rating: number) => {
    setRating(rating);
  };

  // modal close handler
  const closeModalHandler = () => {
    dispatch(onIsRateClose());
  };

  // rate product handler
  const submitFormHandler = () => {
    if (product) {
      const obj = {
        ...product,
        rating: [...product.rating, rating],
      };
      dispatch(updateProduct(obj));
    }
  };

  return (
    <Modal
      title={product?.name || ''}
      onCancel={closeModalHandler}
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
