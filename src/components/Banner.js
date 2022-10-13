import React from 'react';
import Search from '../components/Search';

const Banner = () => {
  return (
    <>
      <h1 className='lg:text-[40px] text-left ml-36 font-semibold mb-6'>
        Search properties to rent
      </h1>
      <Search />
    </>
  );
};

export default Banner;
