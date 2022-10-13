import React from 'react';
import Button from "react-bootstrap/Button";
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { useDispatch } from "react-redux";
import {ADD} from '../Redux/Actions/Action'

const House = ({ house }) => {
 const dispatch= useDispatch()

  const send = (element) =>{
    // console.log(e)
    dispatch(ADD(element))

  }
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img className='mb-8' src={house.image} alt='' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-green-500 rounded-full text-white px-3 inline-block'>
          {house.type}
        </div>
        <div className='bg-violet-500 rounded-full text-white px-3 inline-block'>
          {house.country}
        </div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>{house.address}</div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiBed />
          </div>
          <div className='text-base'>{house.bedrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiBath />
          </div>
          <div className='text-base'>{house.bathrooms}</div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px] rounded-full'>
            <BiArea />
          </div>
          <div className='text-base'>{house.surface}</div>
        </div>
      </div>
      <div className='flex  text-violet'>
      <div className='text-lg font-semibold text-violet-600 mb-4 '>
        $ {house.price}
      </div>
      <div>
        /month
      </div>
      <Button variant="primary" onClick={()=> send(house)} className='bg-violet-700 hover:bg-violet-800 text-white ml-20 flex-1  rounded-lg transition'>Favourite</Button>
      </div>
    </div>
  );
};

export default House;
