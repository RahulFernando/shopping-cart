import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// context
import AuthContext from '../../context/auth.context';

// ui components
import Card from '../card';
import Button from '../button';
import RatingModal from '../rating';

// redux actions
import { onIsRateOpen } from '../../reducers/modal';
import { selectProduct } from '../../reducers/products';
import { addToCart } from '../../reducers/cart';

// styles
import './style.css';

// enums
import { buttonHtmlTypes } from '../../enum/ui';

type Props = {
  item: IProduct;
};

const Container: React.FC<Props> = ({ item }) => {
  const ctx = useContext(AuthContext);
  const dispatch = useDispatch();

  const isVisible = useSelector((state: any) => state.modal.isRateVisible);

  const total: any = item.rating.reduce((avg: any, rate: Number) => avg + rate);
  const avg = total / item.rating.length;

  // rate click button handler
  const rateClickHandler = () => {
    dispatch(selectProduct(item));
    dispatch(onIsRateOpen());
  };

  const addToCartHandler = () => {
    const obj: ICart = { id: parseInt(ctx.id), cart: [item] };
    dispatch(addToCart(obj));
  };

  const addToCartBtn = (
    <Button
      className="add-to-cart-btn"
      label="Add To Cart"
      loading={false}
      onClick={addToCartHandler}
      type={buttonHtmlTypes.button}
    />
  );

  return (
    <>
      <Card cover={item.img} actions={[addToCartBtn]}>
        <div className="product">
          <h1>{item.name}</h1>
          <p className="price">{`Rs. ${item.price}`}</p>
        </div>
        <div className="rating">
          <p>
            Customer Rating <span className="avg-rate">{avg.toFixed(1)}</span>
          </p>
          {ctx.isLoggedIn && (
            <Button
              label="Rate"
              loading={false}
              onClick={rateClickHandler}
              type={buttonHtmlTypes.button}
            />
          )}
        </div>
      </Card>
      {isVisible && <RatingModal />}
    </>
  );
};

export default Container;
