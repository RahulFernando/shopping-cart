interface ICartReducer {
  cartData: {
    loading: boolean;
    data: any;
    error: any;
  };
  addToCartData: {
    loading: boolean;
    data: any;
    error: any;
  };
}

interface ICart {
  id?: number;
  cart: Array<IProduct>;
}
