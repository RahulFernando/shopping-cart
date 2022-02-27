import React, { useContext, useEffect, useState } from 'react';

// context
import AuthContext from '../../context/auth.context';

// ui components
import Modal from '../modal';
import Button from '../button';
import CartItem from '../cartItem';

// redux actions
import {
  fetchCart,
  setCartVisibility,
  purchaseItems,
  removeCartItems,
} from '../../reducers/cart';
import { useDispatch, useSelector } from 'react-redux';
import { buttonHtmlTypes } from '../../enum/ui';

const Container = () => {
  const ctx = useContext(AuthContext);
  const dispatch = useDispatch();

  const isVisible = useSelector((state: any) => state.cart.isVisible);
  const cartData: Array<IProductCart> = useSelector(
    (state: any) => state.cart.cartData.data
  );
  const loading: boolean = useSelector(
    (state: any) => state.cart.purchaseData.loading
  );
  const purchaseSuccess: boolean = useSelector(
    (state: any) => state.cart.purchaseData.data
  );
  const removeCartItemsSuccess: boolean = useSelector(
    (state: any) => state.cart.removeCartItems.data
  );

  const [totalAmount, setTotalAmount] = useState<Number>(0);

  // cart close handler
  const onCartClose = () => {
    dispatch(setCartVisibility(false));
  };

  // checkout cart items handler
  const purchaseClickHandler = () => {
    // check cart empty or not
    if (cartData && cartData.length > 0) {
      const obj: IPurchase = {
        userId: parseInt(ctx.id),
        items: cartData,
        total: totalAmount,
      };

      dispatch(purchaseItems(obj));
    }
  };

  useEffect(() => {
    // calculate total
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

  useEffect(() => {
    if (purchaseSuccess) {
      const obj: ICart = {
        id: parseInt(ctx.id),
        cart: [],
      };

      dispatch(removeCartItems(obj));
    }
  }, [purchaseSuccess]);

  useEffect(() => {
    if (removeCartItemsSuccess) {
      dispatch(fetchCart(ctx.id));
    }
  }, [removeCartItemsSuccess]);

  return (
    <Modal
      isVisible={isVisible}
      title="You Cart"
      onCancel={onCartClose}
      footer={[
        <Button
          label="Checkout"
          loading={loading}
          type={buttonHtmlTypes.button}
          onClick={purchaseClickHandler}
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
