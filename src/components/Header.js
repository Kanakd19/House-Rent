import React from 'react';
import { Link } from 'react-router-dom';
import Badge from "@mui/material/Badge";
import {useSelector } from 'react-redux';

const Header = () => {

 const getdata = useSelector((state) => state.cartreducer.housesData);

  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
      <Link to="/">
      <h1 className='lg:text-[30px] font-semibold cursor-pointer'>
        Estatery
      </h1>
      </Link>
        <div className='flex items-center gap-6'>
          <Link className='hover:text-red-900 transition' to='/'>
            Log in
          </Link>
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/'
          >
            Sign up
          </Link>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="fade-button"
           

          >
            <i
              className="fa-light fa-plus text-light"
              style={{ fontSize: 25, cursor: "pointer" }}
            ></i>
          </Badge>
        </div>
      </div>
    </header>
  );
};

export default Header;
