import axios from 'axios';

import { getAccessToken } from 'common/utils';
import { updateCommentList } from 'reducers/comment';
import { useAppSelector, useAppDispatch } from 'store/hooks';

function DeleteCommentPopup(props) {
  const dispatch = useAppDispatch();
  const { commentList } = useAppSelector((state) => state.comment);
  const { setReplyDeleteFlag, replyDeleteFlag } = props;

  const handleDeleteComment = (replyNum: number) => {
    if (process.env.REACT_APP_HOST !== undefined) {
      axios
        .delete(`${process.env.REACT_APP_HOST}/api/reply/delete/${replyNum}`, {
          headers: {
            'X-ACCESS-TOKEN': getAccessToken(),
          },
        })
        .then(() => {
          const idx = commentList.findIndex(
            (item: { id: number }) => item.id === replyNum,
          );
          const newCommentList = [...commentList];
          newCommentList.splice(idx, 1);
          dispatch(updateCommentList(newCommentList));
          setReplyDeleteFlag(-1);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="reply-delete-modal">
      <div className="reply-delete-container">
        <div className="reply-delete-box">
          <div>
            <button
              type="button"
              onClick={() => {
                handleDeleteComment(replyDeleteFlag);
              }}
            >
              삭제
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                setReplyDeleteFlag(false);
              }}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteCommentPopup;
