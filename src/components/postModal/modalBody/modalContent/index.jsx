import ModalSocial from './modalSocial';
import WriterInfo from './writerInfo';

function ModalContent(currentPostData) {
  const [title, content, boardNum] =
    currentPostData;

  function contentGenerator(data) {
    if (data) return data;

    return Array.from({
      length: 4,
    }).map((_item) => (
      <div key={_item}>
        여기는 내용부분의 영역입니다.
      </div>
    ));
  }

  return (
    <div className="modal-content-container">
      <WriterInfo />
      <div className="modal-post-content">
        <h1 className="title-in-modal">
          {title}
        </h1>
        <div className="text-in-modal">
          {contentGenerator(content)}
          {/* <button
            className="delete-board"
            onClick={() => {
              console.log(currentPostData);
              axios
                .delete(
                  `${process.env.REACT_APP_HOST}/api/board/delete/${boardNum}`,
                  {
                    headers: {
                      'X-ACCESS-TOKEN':
                        localStorage.getItem(
                          'accessToken',
                        ),
                    },
                  },
                )
                .then((res) => {
                  // console.log(res);
                  alert(
                    '게시글이 성공적으로 삭제되었습니다.',
                  );
                  setModalOpacity(0);
                  console.log(
                    '게시글이 성공적으로 삭제되었습니다.',
                  );
                  // boardDelete();

                  // window.location.href = "/";
                })
                .catch((res) => console.log(res));
            }}
          >
            글 삭제
          </button> */}
        </div>
        {/* <div className="text-in-modal">{currentPostData.content}</div> */}
      </div>
      {/* 좋아요 댓글 갯수 출력하는 코드 */}
      <ModalSocial />
      <hr />
      {/* 댓글 창 시작 */}
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
                {getReplyHeart(item.replyNum) ??
                  ''}
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
      {/* 댓글 작성칸 */}
      <CommentCreate>
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
      </CommentCreate>
    </div>
  );
}

export default ModalContent;
