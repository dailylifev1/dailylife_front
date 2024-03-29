import { KeyboardEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';

import { getAccessToken } from 'common/utils';
import AvatarIcon from 'components/Icons/AvatarIcon';
import useCommentUpload from 'hooks/useCommentUpload';
import { setLoading } from 'reducers/loading';
import { ISelectedPostData } from 'reducers/selectedPostData';
import { useAppDispatch } from 'store/hooks';

interface Props {
  currentPostData: ISelectedPostData;
}

function CommentCreate({ currentPostData }: Props) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const selectedPostData = useAppSelector((state) => state.selectedPostData);
  const replyInput = useRef<HTMLInputElement>(null);
  const { addCommentProcess } = useCommentUpload(currentPostData);
  // const { fetchComments } = useComments();

  /** 댓글, 대댓글 작성 api 통신 함수 */

  /** 대댓글 작성 */
  // const addReply = (idx) => {
  //   replyInput.current.value = `@${replyList[idx].userName} `;
  //   replyInput.current.focus();
  //   sessionStorage.setItem('replyInfo', [
  //     replyList[idx].replyNum,
  //     `@${replyList[idx].userName} `,
  //   ]);
  // };

  /** 대댓글 작성 해제 */
  const replyCheckHandler = (e) => {
    if (e.target.value === '' && sessionStorage.length > 0) {
      sessionStorage.removeItem('replyInfo');
    }
  };

  return (
    <CommentCreateWrapper>
      <AvatarIcon image="" />
      <TextInput
        type="text"
        ref={replyInput}
        placeholder="댓글 달기"
        onKeyUp={(event: KeyboardEvent<HTMLInputElement>) => {
          if (event.code === 'Enter' && replyInput.current?.value !== '') {
            if (getAccessToken() === 'No Access Token') {
              dispatch(setLoading(false));
              navigate('/login');
            } else addCommentProcess(event);
            // fetchComments(selectedPostData.boardNum).then((updatedTimeList) => {
            //   dispatch(updateReplyList(updatedTimeList));
            // }).catch((err) => err);
          }
        }}
        onChange={(e) => {
          replyCheckHandler(e);
        }}
      />
    </CommentCreateWrapper>
  );
}

export default CommentCreate;
const CommentCreateWrapper = styled.div`
  margin-top: 15px;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
`;
const TextInput = styled.input`
  border: 1px solid #dcdcdc;
  border-radius: 100px;
  width: 100%;
  margin-left: 10px;
  padding: 10px;
  font-family: 'Pretendard';
  font-size: 16px;
`;
