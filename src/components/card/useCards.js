// import axios from 'axios';
import { useEffect, useState } from 'react';

import { postActions } from '../../reducers/post';

import postApi from 'apis/postApi';
import { useAppDispatch, useAppSelector } from 'store/hooks';

function useCards() {
  const dispatch = useAppDispatch();
  const cardData = useAppSelector((state) => state.post); // 스토어의 상태값을 반환해준다.
  const [modalOpacity, setModalOpacity] = useState(0);

  useEffect(() => {
    async function fetchCards() {
      const { data: cardsData } = await postApi.getItemsWhenLoggedIn();
      dispatch(postActions.updateItems(cardsData));
    }
    fetchCards();
  }, [cardData.isLogoClicked, dispatch]);
  return {
    cardData,
    modalOpacity,
    setModalOpacity,
  };
}

export default useCards;