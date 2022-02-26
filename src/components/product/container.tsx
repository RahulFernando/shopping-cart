import React from 'react';

// ui components
import Card from '../card';

// styles
import './style.css';

type Props = {
  item: IProduct;
};

const Container: React.FC<Props> = ({ item }) => {
  const total: any = item.rating.reduce((avg: any, rate: Number) => avg + rate);
  const avg = total / item.rating.length;
  return (
    <Card cover={item.img}>
      <div className="product">
        <h1>{item.name}</h1>
        <p className="price">{`Rs. ${item.price}`}</p>
      </div>
      <div className="rating">
        <p>
          Customer Rating <span className="avg-rate">{avg}</span>
        </p>
      </div>
    </Card>
  );
};

export default Container;
