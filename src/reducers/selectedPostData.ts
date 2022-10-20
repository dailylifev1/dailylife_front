import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ISelectedPostData {
  boardNum: number;
  src: string;
  title: string;
  content: string;
  userName: string;
}

const selectedPostData = createSlice({
  name: 'selectedPostData',
  initialState: {
    boardNum: -1,
    userName: '',
    src: '',
    title: '',
    content: '',
  },
  reducers: {
    updateData: (
      state,
      action: PayloadAction<ISelectedPostData>,
    ): ISelectedPostData => ({
      boardNum: action.payload.boardNum,
      userName: action.payload.userName,
      src: action.payload.src,
      title: action.payload.title,
      content: action.payload.content,
    }),
  },
});

export const selectedPostActions = selectedPostData.actions;
export default selectedPostData;
