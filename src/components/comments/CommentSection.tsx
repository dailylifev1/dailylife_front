import { useState } from 'react';
import styled from 'styled-components';

import Comment from 'components/comments/Comment';
import { Icomment } from 'reducers/comment';
import { useAppSelector } from 'store/hooks';
import devices from 'styles/device';

function CommentSection() {
  const { replyList } = useAppSelector((state) => state.comment);
  const [replyHover, setReplyHover] = useState(-1);

  return (
    <Container commentList={replyList}>
      {replyList.map(
        (
          item,
          // index
        ) => (
          <Comment
            key={item.replyNum}
            replyHover={replyHover}
            setReplyHover={setReplyHover}
            // index={index}
            item={item}
          />
        ),
      )}
    </Container>
  );
}

export default CommentSection;

const Container = styled.div<{
  commentList: Icomment[];
}>`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 100px;
  margin-top: 1vh;
  overflow-y: auto;

  @media ${devices.mobileS} {
    height: ${(props) => (props.commentList.length === 0 ? '50px' : '260px')};
  }
  @media ${devices.laptop} {
    height: 260px;
  }
`;
