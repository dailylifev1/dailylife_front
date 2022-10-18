import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const loading = createSlice({
  name: 'loading',
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isLoading: action.payload,
    }),
  },
});

export const { setLoading } = loading.actions;

export default loading;
