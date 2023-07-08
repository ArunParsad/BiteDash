import React from 'react'
import { ITEM_IMG_CDN_UR, ITEM_IMG_DEAFULT } from '../../assets/constant'
const MenuListCard = ({
  name,
  id,
  imageId,
  isBestseller,
  isVeg,
  category,
  price,
}) => {
  return (
    <div className='grid grid-cols-6'>
      <section className='col-span-4'>
        <div className='flex space-x-2'>
          {isVeg ? (
            <div className='rounded-md border-2 border-green-400 flex justify-center items-center w-10 h-10'>
              <div className='w-5 h-5 bg-green-400 rounded-full'></div>
            </div>
          ) : (
            <div className='rounded-md border-2 border-red-500 flex justify-center items-center w-10 h-10'>
              <div className='w-5 h-5 bg-red-500 rounded-full'></div>
            </div>
          )}
          {isBestseller && (
            <span className='bg-[#F77132] px-2  rounded-full text-white flex justify-center items-center'>
              Best Seller
            </span>
          )}
        </div>
        <h2 className='mt-2 font-bold text-lg text-gray-600'>{name}</h2>
        <h2 className='mt-1 text-xl text-gray-600'>{price / 100}</h2>
        <button className='text-gray-600 px-2 py-1 border rounded-full'>
          More Details
        </button>
      </section>
      <section className='col-span-2'>
        <div className='relative flex flex-col items-center'>
          <img
            src={imageId ? ITEM_IMG_CDN_UR + imageId : ITEM_IMG_DEAFULT}
            alt=''
            className='rounded-md w-60 h-40'
          />
          <button className='px-6 py-3 bg-white shadow-md rounded-full text-xl font-bold text-green-400 mt-[-2rem]'>
            ADD
          </button>
        </div>
      </section>
    </div>
  )
}

export default MenuListCard
