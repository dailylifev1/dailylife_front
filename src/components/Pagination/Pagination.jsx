import { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { useDispatch } from 'react-redux';

import { postActions } from '../../reducers/post';

import postApi from 'apis/postApi';

import './pagination.css';

function Paging() {
  const dispatch = useDispatch();
  const [page] = useState(1);
  const [renderedItems, setRenderedItems] = useState([]);
  const [totalPostCount, setTotalPostCount] =
    useState('');

  const handleChange = (selectedPage) => {
    const fetchPages = async () => {
      const { data: postedItems } = await postApi.getItemByPage(selectedPage);
      setRenderedItems(postedItems);
    }
    fetchPages();
  };
  useEffect(() => {
    dispatch(postActions.updateItems(renderedItems))
  }, [renderedItems])

  const fetchTotalBoardCount = async () => {
    const { data: boardCount } = await postApi.getTotalPostCount();
    setTotalPostCount(boardCount)
  }
  fetchTotalBoardCount();

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={15}
      totalItemsCount={Number(totalPostCount)}
      pageRangeDisplayed={5}
      prevPageText={
        <img src="/assets/prevPage.png" alt="" />
      }
      nextPageText={
        <img src="/assets/nextPage.png" alt="" />
      }
      onChange={handleChange}
    />
  );
}

export default Paging;
