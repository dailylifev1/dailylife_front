import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Icomment {
  boardNum: number;
  replyContext: string;
  replyNum: number;
  replyTime: string;
  userName: string;
  userNum: number;
}

interface IcommentState {
  commentList: Icomment[];
  reReplyFlag: string[];
}
const initialState: IcommentState = {
  commentList: [],
  reReplyFlag: [],
};
const comment = createSlice({
  name: 'comment',
  initialState,

  reducers: {
    updateCommentList: (state, action: PayloadAction<Icomment[]>) => ({
      ...state,
      commentList: action.payload,
    }),

    updateReReplyFlag: (state, action: PayloadAction<string[]>) => ({
      ...state,
      reReplyFlag: action.payload,
    }),
  },
});

export const { updateCommentList, updateReReplyFlag } = comment.actions;

export default comment;
