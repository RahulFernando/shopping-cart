import React, { useEffect, useState } from 'react';

// ui components
import Modal from '../modal';
import Button from '../button';
import CartItem from '../cartItem';

// redux actions
import { setCartVisibility } from '../../reducers/cart';
import { useDispatch, useSelector } from 'react-redux';
import { buttonHtmlTypes } from '../../enum/ui';

const Container = () => {
  const dispatch = useDispatch();

  const isVisible = useSelector((state: any) => state.cart.isVisible);
  const cartData: Array<IProductCart> = useSelector(
    (state: any) => state.cart.cartData.data
  );

  const [totalAmount, setTotalAmount] = useState<Number>(0);

  const onCartClose = () => {
    dispatch(setCartVisibility(false));
  };

  useEffect(() => {
    if (cartData) {
      let arr: Array<number> = [];
      let total = 0.0;
      cartData.forEach((item) => {
        const price: number = parseInt(`${item.price}`);
        arr.push(price * item.count);
      });

      if (arr.length > 0) {
        total = arr.reduce((total, price) => {
          return total + price;
        });
      }

      setTotalAmount(total);
    }
  }, [cartData]);

  return (
    <Modal
      isVisible={isVisible}
      title="You Cart"
      onCancel={onCartClose}
      footer={[
        <Button
          label="Checkout"
          loading={false}
          type={buttonHtmlTypes.button}
        />,
      ]}
    >
      {cartData &&
        cartData.map((item, index) => <CartItem key={index} product={item} />)}
      <div className="total-amount">
        <p>{`Total Rs. ${totalAmount}`}</p>
      </div>
    </Modal>
  );
};

export default Container;
