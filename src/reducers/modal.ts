import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisible: false,
  isRateVisible: false,
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
    onIsRateOpen(state) {
      return { ...state, isRateVisible: true };
    },
    onIsRateClose(state) {
      return { ...state, isRateVisible: false };
    },
  },
});

const { actions, reducer } = authSlice;

export const { onOpen, onClose, onIsRateOpen, onIsRateClose } = actions;

export default reducer;
