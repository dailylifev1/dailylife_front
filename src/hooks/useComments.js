import { useEffect, useState } from 'react';

import commentApi from 'apis/commentApi';

const useComments = (boardNum) => {
  const [replyList, setReplyList] = useState([]);
  const [reReplyFlag, setReReplyFlag] = useState(
    [],
  );

  /** 서버로부터 replyTime을 받아서 분/시간/일/주 같은 텍스트로 리턴 */
  const dateHandler = (replyDate) => {
    const [sec, min, hour, day, week] = [
      1,
      60,
      3600,
      86400,
      86400 * 7,
      2592000,
      2592000 * 12,
    ];
    const today = new Date();
    const formattedDate = new Date(
      `${replyDate[0]}-${replyDate[1]}-${
        replyDate[2]
      } ${(replyDate[3] + 9) % 24}:${
        replyDate[4]
      }:${replyDate[5]}`,
    );
    const elapsedTime = Math.trunc(
      (today.getTime() -
        formattedDate.getTime()) /
        1000,
    );
    let elapsedText = '';

    if (elapsedTime < sec) elapsedText = '지금';
    else if (elapsedTime < min)
      elapsedText = `${elapsedTime}초`;
    else if (elapsedTime < hour)
      elapsedText = `${Math.trunc(
        elapsedTime / min,
      )}분`;
    else if (elapsedTime < day)
      elapsedText = `${Math.trunc(
        elapsedTime / hour,
      )}시간`;
    else if (elapsedTime < week)
      elapsedText = `${Math.trunc(
        elapsedTime / day,
      )}일`;
    else
      elapsedText = `${Math.trunc(
        elapsedTime / week,
      )}주`;

    return elapsedText;
  };

  /** 게시글 선택 시 replyList(댓글 정보 state) 업데이트 */
  useEffect(() => {
    const fetchComments = async () => {
      const { data: commentItems } =
        await commentApi.getComments(boardNum);
      const updatedComments = commentItems.map(
        (item) => dateHandler(item.replyTime),
      );
      setReplyList(updatedComments);
      dateHandler();
    };
    fetchComments();
  }, [boardNum]);

  return {
    replyList,
    setReplyList,
    reReplyFlag,
    setReReplyFlag,
    dateHandler,
  };
};

export default useComments;
