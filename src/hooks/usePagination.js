import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import postApi from 'apis/postApi';
import { postActions } from 'reducers/post';
import { useAppSelector } from 'store/hooks';

function usePagination({ boardCountPerPage, pageRangeCount }) {
  const dispatch = useDispatch();
  const [totalPostCount, setTotalPostCount] = useState('');

  const store = useAppSelector((state) => state.post);
  let currentTotalPostCount = store.myValues.length;
  useEffect(() => {
    currentTotalPostCount = postApi.getTotalPostCount();
  }, []);

  const handleChange = (selectedPage) => {
    const fetchPages = async () => {
      const { data: postedItems } = await postApi.getItemByPage(selectedPage);
      dispatch(postActions.updateItems(postedItems));
      console.log('postedItems:', postedItems);
    };
    fetchPages();
  };

  const fetchTotalBoardCount = async () => {
    // const { data: boardCount } = await postApi.getTotalPostCount();
    // currentTotalPostCount
    //   ? setTotalPostCount(currentTotalPostCount)
    //   : setTotalPostCount(boardCount);
  };
  fetchTotalBoardCount();
  return {
    boardCountPerPage,
    pageRangeCount,
    totalPostCount,
    handleChange,
  };
}

export default usePagination;
