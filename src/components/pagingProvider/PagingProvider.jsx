import Pagination from 'react-js-pagination';
import 'components/pagingProvider/pagingProvider.scss';

function PagingProvider({
  boardCountPerPage,
  pageRangeCount,
  page,
  postCount,
  handleChange,
}) {
  return (
    <div onClick={() => { window.scrollTo(0, 0) }}>
      <Pagination
        activePage={page}
        itemsCountPerPage={boardCountPerPage}
        totalItemsCount={postCount}
        pageRangeDisplayed={pageRangeCount}
        prevPageText={<img src="/assets/prevPage.png" alt="" />}
        nextPageText={<img src="/assets/nextPage.png" alt="" />}
        onChange={handleChange}
      /></div>
  );
}

export default PagingProvider;
