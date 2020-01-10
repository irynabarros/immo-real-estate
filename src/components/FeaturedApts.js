import React, { useContext } from 'react';
import { AptContext } from '../context';
import Loading from '../components/Loading';
import Apt from './Apt';

const FeaturedApts = () => {
  const contextType = useContext(AptContext);
  let { loading, featuredApts: apts } = contextType;
  apts = apts.map(apt => {
    return <Apt key={apt.id} apt={apt} />;
  });
  return (
    <section className='featured-rooms'>
      <h2>Our selection of properties</h2>
      <div className='featured-rooms-center'>
        {loading ? <Loading /> : apts}
      </div>
    </section>
  );
};

export default FeaturedApts;
