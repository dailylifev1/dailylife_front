import styled from 'styled-components';

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
        >
          <CommentMain>
            <Avatar />
            <div className="username">
              {item.userName}
            </div>
            <div className="comment-content">
              {item.replyContext}
            </div>
            <span className="comment-like">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill="none"
              >
                <path
                  d="M3.87499 11.625C8.37499 16.875 11 18.375 11 18.375C11 18.375 13.625 16.875 18.125 11.625C22.625 6.375 19.625 1.125 15.875 1.125C12.125 1.125 11 5.625 11 5.625C11 5.625 9.87499 1.125 6.12499 1.125C2.37499 1.125 -0.625012 6.375 3.87499 11.625Z"
                  stroke="#6A6A6A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </CommentMain>
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
