import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IPost {
  boardNum: number;
  content: string;
  heart: boolean;
  originalFileName: string[];
  serverFileUrl: string[];
  title: string;
  userName: string;
}
interface State {
  pageNum: number;
  myValues: IPost[];
}
const post = createSlice({
  name: 'post',
  initialState: {
    pageNum: 1,
    myValues: [] as IPost[],
  },
  reducers: {
    updateItems: (state, action: PayloadAction<IPost[]>): State => ({
      ...state,
      myValues: action.payload,
    }),
    updatePageNum: (state, action: PayloadAction<number>): State => ({
      ...state,
      pageNum: action.payload,
    }),
  },
});

export const postActions = post.actions;
<<<<<<< HEAD
=======

>>>>>>> 198a7c820ea1641c89d123d57e23133bef9b57f9
export default post;
