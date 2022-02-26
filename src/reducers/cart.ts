import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  cartData: {
    loading: false,
    data: null,
    error: null,
  },
  addToCartData: {
    loading: false,
    data: null,
    error: null,
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, { payload }: any) {
      return {
        ...state,
        addToCartData: { ...state.addToCartData, loading: true },
      };
    },
    addToCartSuccess(state, { payload }: PayloadAction): ICartReducer {
      return {
        ...state,
        addToCartData: {
          ...state.addToCartData,
          loading: false,
          data: payload,
          error: null,
        },
      };
    },
    addToCartFailure(state, { payload }: PayloadAction): ICartReducer {
      return {
        ...state,
        addToCartData: {
          ...state.addToCartData,
          loading: false,
          data: null,
          error: payload,
        },
      };
    },
    fetchCart(state, { payload }) {
      return { ...state, cartData: { ...state.cartData, loading: true } };
    },
    fetchCartSuccess(state, { payload }: PayloadAction): ICartReducer {
      return {
        ...state,
        cartData: {
          ...state.cartData,
          loading: false,
          data: payload,
          error: null,
        },
      };
    },
    fetchCartFailure(state, { payload }: PayloadAction): ICartReducer {
      return {
        ...state,
        cartData: {
          ...state.cartData,
          loading: false,
          data: null,
          error: payload,
        },
      };
    },
  },
});

const { actions, reducer } = cartSlice;

export const {
  addToCart,
  addToCartSuccess,
  addToCartFailure,
  fetchCart,
  fetchCartSuccess,
  fetchCartFailure,
} = actions;

export default reducer;
