import { createSlice } from '@reduxjs/toolkit';

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
    fetchProductsSuccess(state, { response }: any) {
      return {
        ...state,
        productData: {
          ...state.productData,
          loading: false,
          data: response.data,
          error: null,
        },
      };
    },
    fetchProductsFailure(state, { response }: any) {
      return {
        ...state,
        productData: {
          ...state.productData,
          loading: false,
          data: null,
          error: response
            ? response.data
              ? response.data.message
              : response.message
            : null,
        },
      };
    },
  },
});

const { actions, reducer } = productSlice;

export const { fetchProducts, fetchProductsSuccess, fetchProductsFailure } =
  actions;

export default reducer;
