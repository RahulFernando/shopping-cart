import React from 'react';

// style
import './style.css';

type Props = {
  product: IProductCart;
};

const Container: React.FC<Props> = ({ product }) => {
  return (
    <div className="cart">
      <div className="cart-item">
        <img src={product.img} alt="alt" />
        <div className="item-detail">
          <h6>{product.name}</h6>
          <p>Rs 550</p>
        </div>
        <div className="item-count">
          <p>{product.count} items</p>
        </div>
      </div>
    </div>
  );
};

export default Container;
