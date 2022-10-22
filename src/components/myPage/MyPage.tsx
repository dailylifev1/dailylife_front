import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import MyPost from './MyPost';
import UserInfo from './UserInfo';

import { getAccessToken } from 'common/utils';

export default function MyPage() {
  const [, setMyPost] = useState<string[]>();
  const accessToken = getAccessToken();
  useEffect(() => {
    async function fetchPost() {
      if (process.env.REACT_APP_HOST !== undefined) {
        const response = await axios.get(
          `${process.env.REACT_APP_HOST}/api/board/myBoard`,
          {
            headers: {
              'X-ACCESS-TOKEN': accessToken,
            },
          },
        );
        setMyPost(response.data);
      }
    }
    fetchPost()
      .then((res) => res)
      .catch((err) => err);
  });
  return (
    <MyInfoWrapper>
      <UserInfo />
      <MyPost />
    </MyInfoWrapper>
  );
}
const MyInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
