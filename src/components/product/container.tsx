import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// context
import AuthContext from '../../context/auth.context';

// ui components
import Card from '../card';
import Button from '../button';
import RatingModal from '../rating';

// redux actions
import { onIsRateOpen, onOpen } from '../../reducers/modal';
import { selectProduct } from '../../reducers/products';
import { addToCart, fetchCart } from '../../reducers/cart';

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

  const addToCartSuccess = useSelector(
    (state: any) => state.cart.addToCartData.data
  );
  const cartData: Array<IProductCart> = useSelector(
    (state: any) => state.cart.cartData.data
  );

  const total: any = item.rating.reduce((avg: any, rate: Number) => avg + rate);
  const avg = total / item.rating.length;

  // rate click button handler
  const rateClickHandler = () => {
    dispatch(selectProduct(item));
    dispatch(onIsRateOpen());
  };

  const addToCartHandler = () => {
    if (ctx.isLoggedIn) {
      let obj: ICart;
      let cart: Array<IProductCart> = [...cartData];
      const index = cart.findIndex((product) => product.name === item.name);
      if (index !== -1) {
        console.log(index);
        const cal = cart[index].count + 1;
        const updated = { ...cart[index], count: cal };
        cart[index] = updated;
        obj = { id: parseInt(ctx.id), cart: cart };
      } else {
        obj = {
          id: parseInt(ctx.id),
          cart: [
            ...cartData,
            {
              id: item.id,
              name: item.name,
              img: item.img,
              count: 1,
              price: item.price,
            },
          ],
        };
      }
      dispatch(addToCart(obj));
    } else {
      dispatch(onOpen());
    }
  };

  useEffect(() => {
    dispatch(fetchCart(ctx.id));
  }, [addToCartSuccess]);

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
    <Card cover={item.img} actions={[addToCartBtn]}>
      <div className="product">
        <h3>{item.name}</h3>
        <p className="price">{`${item.price} LKR`}</p>
      </div>
      <div className="rating">
        <p>
          Rating: <span className="avg-rate">{`${avg.toFixed(1)}/5`}</span>
        </p>
        {ctx.isLoggedIn && (
          <Button
            className="rate-btn"
            label="Rate"
            loading={false}
            onClick={rateClickHandler}
            type={buttonHtmlTypes.button}
          />
        )}
      </div>
    </Card>
  );
};

export default Container;
