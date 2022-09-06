import styled from 'styled-components';

function CommentCreate() {
  return (
    <CommentCreateWrapper>
      <Avatar />
      <input
        type="text"
        className="comment-create-text"
        ref={replyInput}
        placeholder="댓글 달기"
        onKeyUp={(e) => {
          if (
            window.event.keyCode === 13 &&
            e.target.value !== ''
          )
            replyInsertHandler(e);
        }}
        onChange={(e) => {
          reReplyCheckHandler(e);
        }}
      />
    </CommentCreateWrapper>
  );
}

export default CommentCreate;
const CommentCreateWrapper = styled.div.attrs({
  className: 'comment-create',
})`
  & > .comment-create-text {
    border: 1px solid #dcdcdc;
    border-radius: 100px;
    width: 100%;
    margin-left: 10px;
    padding: 10px;
    font-family: 'Pretendard';
    font-size: 16px;
  }
`;
const Avatar = styled.div`
  border-radius: 50%;
  width: 38px;
  aspect-ratio: 1;
  background-color: purple;
`;
