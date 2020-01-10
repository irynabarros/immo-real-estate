import React, { useContext } from 'react';
import AptFilter from '../components/AptFilter';
import AptList from '../components/AptList';
import Loading from '../components/Loading';
import { AptContext } from '../context';

export const Apts = () => {
  const contextType = useContext(AptContext);
  let { loading, sortedApts, apts } = contextType;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <AptFilter apts={apts} />
      <AptList apts={sortedApts} />
    </div>
  );
};

export default Apts;
