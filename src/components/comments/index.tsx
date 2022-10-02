import { useEffect } from 'react';
import { useAppSelector } from 'store/hooks';

import CommentCreate from './CommentCreate';
import CommentSection from './CommentSection';

import ModalSocial from 'components/postModal/ModalSocial';
import useComments from 'hooks/useComments';
import { OpacityType } from 'components/card/useCards';

interface Props {
  modalOpacity: OpacityType;
}

function Comments({ modalOpacity }: Props) {
  const currentPostData = useAppSelector((state) => state.selectedPostData);
  const { dateHandler, fetchComments } = useComments();

  useEffect(() => {
    if (modalOpacity) fetchComments(currentPostData.boardNum);
  }, [modalOpacity, currentPostData.boardNum, fetchComments]);

  return (
    <div className="comments-wrapper">
      {/* 좋아요 댓글 갯수 출력하는 코드 */}
      <ModalSocial />
      <hr />
      {/* 댓글 창 시작 */}
      <CommentSection />
      {/* 댓글 작성칸 */}
      <CommentCreate
        dateHandler={dateHandler}
        currentPostData={currentPostData}
      />
    </div>
  );
}

export default Comments;
