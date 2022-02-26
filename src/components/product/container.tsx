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
  return (
    <>
      <Card cover={item.img}>
        <div className="product">
          <h1>{item.name}</h1>
          <p className="price">{`Rs. ${item.price}`}</p>
        </div>
        <div className="rating">
          <p>
            Customer Rating <span className="avg-rate">{avg}</span>
          </p>
          {ctx.isLoggedIn && (
            <Button
              label="Rate"
              loading={false}
              onClick={() => dispatch(onIsRateOpen())}
              type={buttonHtmlTypes.button}
            />
          )}
        </div>
      </Card>
      {isVisible && <RatingModal product={item} isVisible={isVisible} />}
    </>
  );
};

export default Container;
