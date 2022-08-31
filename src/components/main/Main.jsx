import { useEffect, React } from 'react';

import Cards from '../card/card';
import Paging from '../Pagination/Pagination';

export default function Main() {
  console.log('executes Main');
  useEffect(() => {
    console.log('rendered Main');
  });
  return (
    <>
      <Cards />
      <Paging />
    </>
  );
}