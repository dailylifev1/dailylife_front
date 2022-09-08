import postApi from 'apis/postApi';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { useDispatch } from 'react-redux';

import { postActions } from '../../reducers/post';
import './pagination.css';

function Paging() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [rerender, setRerender] = useState('');
  const [totalPostCount, setTotalPostCount] =
    useState('');

  // const pageChangeHandler = (page) => {  // 오류 날시 아래 코드를 이 코드로 뵨굥
  const pageChangeHandler = () => {
    axios
      .get(
        `${process.env.REACT_APP_HOST}/api/board/getBoardNotLogin?pg=${page}`,
      )
      .then((res) => {
        dispatch(
          postActions.updateItems(res.data),
        );
        setRerender('');
      })
      .catch((res) => {
        console.log(res);
      });
    setPage(() => {
      setRerender(page);
      return page;
    });
  };
  useEffect(() => {
    postApi.getPostDataForNotLoginUser().then;

    axios
      .get(
        `${process.env.REACT_APP_HOST}/api/board/getBoardNotLogin?pg=${page}`,
      )
      .then(() => {
        // console.log(res.data);
        dispatch(postActions.updatePageNum(page));
        setRerender('');
      })
      .catch((res) => {
        console.log(res);
      });
    axios
      .get(
        `${process.env.REACT_APP_HOST}/api/board/getBoardCount`,
        {},
      )
      .then((res) => {
        setTotalPostCount(res.data);
      });
  }, [rerender, totalPostCount]);

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
      onChange={pageChangeHandler}
    />
  );
}

export default Paging;
