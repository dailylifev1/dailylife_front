import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import '../Searching.scss';

import { postActions } from 'reducers/post';

function SearchForm() {
  const dispatch = useDispatch();
  const [typedKeyword, setTypedKeyword] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div id="wrap">
      <form action="" onSubmit={submitHandler} autoComplete="on">
        <input
          className="searchBar"
          id="search"
          name="search"
          type="text"
          placeholder="검색"
          onChange={(e) => {
            setTypedKeyword(e.target.value);
          }}
          onKeyUp={() => {
            if (window.event.keyCode === 13) {
              axios
                .get(
                  `${process.env.REACT_APP_HOST}/api/board/getBoardNotLogin?keyword=${typedKeyword}`,
                  {},
                )
                .then((res) => {
                  dispatch(postActions.updateItems(res.data));
                })
                .catch((res) => {
                  console.log(res);
                });
            }
          }}
        />
        <input id="search_submit" value="Researcher" type="submit" />
      </form>
    </div>
  );
}

export default SearchForm;
