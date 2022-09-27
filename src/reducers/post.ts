import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPost {
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
<<<<<<< HEAD

=======
>>>>>>> 18e24a6041e2cb126b37bf02972a143b89bf9a80
const post = createSlice({
  name: 'post',
  initialState: {
    pageNum: 1,
    // isOpenWritePostModal: false,
    myValues: [] as IPost[],
  },
  reducers: {
<<<<<<< HEAD
    // updateItems(state, action) {
    //   state.myValues = action.payload;
    // },
    // updatePageNum(state, action) {
    //   state.PageNum = action.payload;
    // },
=======
>>>>>>> 18e24a6041e2cb126b37bf02972a143b89bf9a80
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
>>>>>>> 18e24a6041e2cb126b37bf02972a143b89bf9a80
export default post;
