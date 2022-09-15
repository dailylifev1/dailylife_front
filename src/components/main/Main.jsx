/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, React } from 'react';

import Cards from '../card/card';

import usePagination from 'components/pagination/usePagination';
import PagingProvider from 'components/pagingProvider/pagingProvider';

export default function Main() {
  console.log('executes Main');
  useEffect(() => {
    console.log('rendered Main');
  });
  const itemCountPerPage = 15;
  const pageRangeCount = 5;
  const boardPagingInfo = usePagination({ itemCountPerPage, pageRangeCount });
  return (
    <>
      <Cards />
      {/* <Paging /> */}
      {/* <pagingProvider {...boardPagingInfo} /> */}
      <PagingProvider {...boardPagingInfo} />
    </>
  );
}
