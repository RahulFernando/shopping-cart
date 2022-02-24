import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginData: {
    loading: false,
    data: null,
    error: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser(state, { payload }) {
      return { ...state, loginData: { ...state.loginData, loading: true } };
    },
    loginUserSuccess(state, { payload }) {
      return {
        ...state,
        loginData: {
          ...state.loginData,
          loading: false,
          data: payload.data,
          error: null,
        },
      };
    },
    loginUserFailure(state, { payload }) {
      return {
        ...state,
        loginData: {
          ...state.loginData,
          loading: false,
          data: null,
          error: payload
            ? payload.data
              ? payload.data.message
              : payload.data
            : null,
        },
      };
    },
  },
});

const { actions, reducer } = authSlice;

export const { loginUser, loginUserSuccess, loginUserFailure } = actions;

export default reducer;
