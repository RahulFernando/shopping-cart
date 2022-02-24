import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false,
};

const authSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    onOpen(state) {
      return { ...state, isVisible: true };
    },
    onClose(state) {
      return {
        ...state,
        isVisible: false,
      };
    },
  },
});

const { actions, reducer } = authSlice;

export const { onOpen, onClose } = actions;

export default reducer;
