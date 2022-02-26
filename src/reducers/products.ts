import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  productData: {
    loading: false,
    data: null,
    error: null,
  },
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
  },
});

const { actions, reducer } = productSlice;

export const { fetchProducts, fetchProductsSuccess, fetchProductsFailure } =
  actions;

export default reducer;
