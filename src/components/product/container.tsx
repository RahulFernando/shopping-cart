import React, { useContext, useState } from 'react';
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

  const rateClickHandler = () => {
    dispatch(selectProduct(item));
    dispatch(onIsRateOpen());
  };

  return (
    <>
      <Card cover={item.img}>
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
