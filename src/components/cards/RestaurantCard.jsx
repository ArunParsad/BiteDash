import React from 'react'
import { AiFillStar } from 'react-icons/ai'
const RestaurantCard = ({
  name,
  deliveryTime,
  cuisines,
  avgRating,
  costForTwoString,
  cloudinaryImageId,
}) => {
  return (
    <div className='w-80 h-80 bg-white rounded-md p-3 hover:scale-105 hover:cursor-pointer transition-all duration-200'>
      {/* Header */}
      <div className='w-full h-[50%] rounded-md flex flex-col justify-center items-center overflow-hidden'>
        <img
          src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
          alt=''
          className='w-[100%]'
        />
      </div>
      {/* Content */}
      <section className='mt-3'>
        <h2 className='text-xl font-bold text-gray-700'>{name}</h2>
        <p className='text-sm text-gray-600 leading-tight'>
          {cuisines.join(',')}
        </p>
        <section className='flex justify-between mt-5 items-center'>
          <div className='bg-green-400 flex px-3 py-1 rounded-full text-white space-x-2  justify-around items-center'>
            {/* Rating */}
            <AiFillStar />
            <div>{avgRating}</div>
          </div>
          <div>{deliveryTime} Mins</div>
          <div>{costForTwoString}</div>
        </section>
      </section>
    </div>
  )
}

export default RestaurantCard
