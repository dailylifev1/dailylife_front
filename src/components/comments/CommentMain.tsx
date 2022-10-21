import styled from 'styled-components';

import AvatarIcon from 'components/Icons/AvatarIcon';
import LikeIcon from 'components/Icons/LikeIcon';
import { type Icomment } from 'reducers/comment';

interface Props {
  item: Icomment;
}

function CommentMain({ item }: Props) {
  return (
    <CommentMainWrapper>
      <AvatarIcon image="" />
      <Username>{item.userName}</Username>
      <CommentContent>{item.replyContext}</CommentContent>
      <LikeIcon replyNum={item.replyNum} />
    </CommentMainWrapper>
  );
}

export default CommentMain;
const CommentMainWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > .username {
    margin-left: 10px;
    font-weight: 600;
  }
  & > .comment-content {
    flex: 3;
    margin-left: 10px;
  }
  & > .comment-like > svg {
    width: 14.08px;
    height: 12.94px;
  }
`;
const Username = styled.div``;
const CommentContent = styled.div``;
