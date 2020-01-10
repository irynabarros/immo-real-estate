import React, { useState } from 'react';
import Apt from './Apt';
import Pagination from '../Pagination';

export default function AptList({ apts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [aptsPerPage] = useState(8);

  const totalApts = apts.length;
  const indexOfLastApt = currentPage * aptsPerPage;
  const indexOfFirstApt = indexOfLastApt - aptsPerPage;
  const currentApts = [...apts.slice(indexOfFirstApt, indexOfLastApt)];
  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (apts.length === 0) {
    return (
      <div className='empty-search'>
        <h3>no properties found</h3>
      </div>
    );
  }
  return (
    <>
      <section className='roomslist'>
        <div className='roomslist-center'>
          {currentApts.map(item => {
            return <Apt key={item.id} apt={item} />;
          })}
        </div>
      </section>

      <Pagination
        className='page'
        aptsPerPage={aptsPerPage}
        totalApts={totalApts}
        paginate={paginate}
      />
    </>
  );
}
