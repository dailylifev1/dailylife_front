import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from './post';

interface IState {
  results: IPost[];
}

const searchResult = createSlice({
  name: 'searchResult',
  initialState: {
    results: [] as IPost[],
  },
  reducers: {
    bringItems: (state, action: PayloadAction<IPost[]>): IState => ({
      results: [...state.results, ...action.payload],
    }),
  },
});

export const { bringItems } = searchResult.actions;
export default searchResult;
