interface IProductsReducer {
  productData: {
    loading: boolean;
    data: any;
    error: any;
  };
  ratingData: {
    loading: boolean;
    data: any;
    error: any;
  };
  selectedProduct: any;
  searchKeyword: string;
}

interface IProduct {
  id: Number;
  name: string;
  price: Number;
  description?: string;
  img: string;
  rating: Array<Number>;
}

interface IProductCart {
  id: Number;
  name: string;
  price: Number;
  img: string;
  count: number;
}

interface IProductUpdate {
  payload: IProduct;
}
