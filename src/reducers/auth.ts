import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  loginData: {
    loading: false,
    data: null,
    error: null,
  },
  registerData: {
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
    loginUserSuccess(state, { payload }: PayloadAction): IAuthReducer {
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
    loginUserFailure(state, { payload }): IAuthReducer {
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
    registerUser(state, { payload }: IRegister): IAuthReducer {
      return {
        ...state,
        registerData: {
          ...state.registerData,
          loading: true,
        },
      };
    },
    registerUserSuccess(state, { payload }: PayloadAction): IAuthReducer {
      return {
        ...state,
        registerData: {
          ...state.registerData,
          loading: false,
          data: payload,
          error: null,
        },
      };
    },
    registerUserFailure(state, { payload }: PayloadAction): IAuthReducer {
      return {
        ...state,
        registerData: {
          ...state.registerData,
          loading: false,
          data: null,
          error: payload,
        },
      };
    },
  },
});

const { actions, reducer } = authSlice;

export const {
  loginUser,
  loginUserSuccess,
  loginUserFailure,
  registerUser,
  registerUserSuccess,
  registerUserFailure,
} = actions;

export default reducer;
