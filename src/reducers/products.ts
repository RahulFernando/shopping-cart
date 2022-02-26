import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  productData: {
    loading: false,
    data: null,
    error: null,
  },
  ratingData: {
    loading: false,
    data: null,
    error: null,
  },
  searchKeyword: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts(state) {
      return { ...state, productData: { ...state.productData, loading: true } };
    },
    fetchProductsSuccess(state, { payload }: PayloadAction): IProductsReducer {
      return {
        ...state,
        productData: {
          ...state.productData,
          loading: false,
          data: payload,
          error: null,
        },
      };
    },
    fetchProductsFailure(state, { payload }: PayloadAction): IProductsReducer {
      return {
        ...state,
        productData: {
          ...state.productData,
          loading: false,
          data: null,
          error: payload,
        },
      };
    },
    setSearchKeyword(state, { payload }: any): IProductsReducer {
      return {
        ...state,
        searchKeyword: payload,
      };
    },
    updateProduct(state, { payload }) {
      return {
        ...state,
        ratingData: {
          ...state.ratingData,
          loading: true,
        },
      };
    },
    updateProductSuccess(state, { payload }: IProductUpdate): IProductsReducer {
      return {
        ...state,
        ratingData: {
          ...state.ratingData,
          loading: false,
          data: payload,
          error: null,
        },
      };
    },
    updateProductFailure(state, { payload }): IProductsReducer {
      return {
        ...state,
        ratingData: {
          ...state.ratingData,
          loading: false,
          data: null,
          error: payload,
        },
      };
    },
  },
});

const { actions, reducer } = productSlice;

export const {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFailure,
  setSearchKeyword,
  updateProduct,
  updateProductSuccess,
  updateProductFailure,
} = actions;

export default reducer;
