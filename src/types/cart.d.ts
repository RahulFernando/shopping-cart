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
  purchaseData: {
    loading: boolean;
    data: any;
    error: any;
  };
  removeCartItems: {
    loading: boolean;
    data: any;
    error: any;
  };
  isVisible: boolean;
}

interface ICart {
  id?: Number;
  cart: Array<IProductCart>;
}
