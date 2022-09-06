import styled from 'styled-components';

import CommentMain from './commentMain';

function CommentSection() {
  return (
    <div className="comment-section">
      {replyList.map((item, index) => (
        <CommentContainer
          key={index}
          onMouseOver={() => {
            setReplyHover(item.replyNum);
          }}
          onMouseOut={() => {
            setReplyHover(-1);
          }}
          <CommentMain />
          <CommentDateContainer>
            <span className="empty" />
            <span className="comment-date">
              {item.time} ·{' '}
              {getReplyHeart(item.replyNum) ?? ''}
              {' · '}
              답글 달기
              {item.subCommentCount ? (
                <span className="comment-expand">
                  {' '}
                  · 답글 보기 (
                  {item.subCommentCount}
                  개){' '}
                </span>
              ) : (
                ''
              )}
              {replyHover === item.replyNum ? (
                <ReplyOption
                  onClick={() => {
                    setReplyDeleteFlag(
                      item.replyNum,
                    );
                  }}
                >
                  <svg
                    aria-label="댓글 옵션"
                    className="_ab6-"
                    color="#8e8e8e"
                    fill="#8e8e8e"
                    width="30"
                    height="30"
                    role="img"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="1.5"
                    ></circle>
                    <circle
                      cx="6"
                      cy="12"
                      r="1.5"
                    ></circle>
                    <circle
                      cx="18"
                      cy="12"
                      r="1.5"
                    ></circle>
                  </svg>
                </ReplyOption>
              ) : (
                ''
              )}
            </span>
          </CommentDateContainer>
          {/* 대댓글 목록 */}
          {reReplyFlag[index]
            ? item.reReply.map((item, idx) => (
                <div
                  style={{
                    width: '100%',
                    height: '30px',
                  }}
                >
                  {item.replyReplyContext}
                </div>
              ))
            : // <ul className="comment-sub-list">
              //   <li className="comment-sub-item">
              //     <div className="avatar"></div>
              //   </li>
              // </ul>
              ''}
        </CommentContainer>
      ))}
    </div>
  );
}

export default CommentSection;

const CommentContainer = styled.div.attrs({
  className: 'comment-container',
})`
  & > .comment-date-container {
    display: flex;
  }
`;
