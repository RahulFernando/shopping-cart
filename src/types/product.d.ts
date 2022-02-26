interface IProductsReducer {
  productData: {
    loading: boolean;
    data: any;
    error: any;
  };
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
