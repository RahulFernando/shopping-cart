import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    loginUserSuccess(state, { payload }: PayloadAction): ILoginReducer {
      return {
        ...state,
        loginData: {
          ...state.loginData,
          loading: false,
          data: payload,
          error: null,
        },
      };
    },
    loginUserFailure(state, { payload }): ILoginReducer {
      return {
        ...state,
        loginData: {
          ...state.loginData,
          loading: false,
          data: null,
          error: payload,
        },
      };
    },
  },
});

const { actions, reducer } = authSlice;

export const { loginUser, loginUserSuccess, loginUserFailure } = actions;

export default reducer;
