import { MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { postActions } from '../../reducers/post';

import { selectedPostActions } from 'reducers/selectedPostData';
import likeApi from 'apis/likeApi';

function useCardItem({
  heartState,
  setModalOpacity,
  boardNum,
  src,
  title,
  content,
}) {
  const [like, setLike] = useState(heartState);
  const dispatch = useDispatch();
  const openModal = () => {
    setModalOpacity(1);
  };
  const handleClick = () => {
    openModal();
    dispatch(
      selectedPostActions.updateData({
        boardNum,
        src,
        title,
        content,
      }),
    );
  };

  // useEffect(() => {
  //   async function fetchItemData() {
  //     const items = await axios
  //       .get(`${process.env.REACT_APP_HOST}/api/board/getBoard`, {
  //         headers: {
  //           'X-ACCESS-TOKEN': localStorage.getItem('accessToken'),
  //         },
  //       })
  //       .then((res) => res.data);

  //     dispatch(postActions.updateItems(items));
  //   }
  //   fetchItemData();
  // }, [like]);

  const clickHeartEvent = (e: MouseEvent<HTMLImageElement>) => {
    e.stopPropagation();
    setLike(!like);
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) likeApi.updateBoardHeart(boardNum, accessToken);
    else alert('회원가입 후 이용하실 수 있습니다.');
  };
  return { handleClick, clickHeartEvent, like };
}

export default useCardItem;
