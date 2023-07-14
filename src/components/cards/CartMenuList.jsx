import React from 'react'
import { ITEM_IMG_CDN_UR, ITEM_IMG_DEAFULT } from '../../assets/constant'
import { MdAdd, MdRemove } from 'react-icons/md'
import { useGlobalContext } from '../context/Context'
const CartMenuList = ({
  name,
  id,
  imageId,
  isBestseller,
  isVeg,
  category,
  price,
  defaultPrice,
  qty,
}) => {
  const { dispatch } = useGlobalContext()

  const cartitem = {
    name,
    id,
    imageId,
    isBestseller,
    isVeg,
    category,
    price,
    defaultPrice,
    qty,
  }

  return (
    <div className='grid md:grid-cols-6 grid-cols-2'>
      <section className='md:col-span-4 col-span-1'>
        <div className='flex space-x-2'>
          {isVeg ? (
            <div className='rounded-md border-2 border-green-400 flex justify-center items-center md:w-10 md:h-10 w-5 h-5'>
              <div className='md:w-5 md:h-5 w-2 h-2 bg-green-400 rounded-full'></div>
            </div>
          ) : (
            <div className='rounded-md border-2 border-red-500 flex justify-center items-center md:w-10 md:h-10 w-5 h-5 '>
              <div className='md:w-5 md:h-5 w-2 h-2 bg-red-500 rounded-full'></div>
            </div>
          )}
          {isBestseller && (
            <span className='md:bg-[#F77132] bg-none text-[#F77132] md:text-white md:px-2 px-0 text-sm  rounded-full font-bold flex justify-center items-center'>
              Best Seller
            </span>
          )}
        </div>
        <h2 className='mt-2 font-bold md:text-lg text-sm text-gray-600'>
          {name}
        </h2>
        <h2 className='mt-1 text-xl text-gray-600'>
          ₹ {price ? price / 100 : defaultPrice / 100}
        </h2>
      </section>
      <section className='md:col-span-2 col-span-1'>
        <div className='relative flex flex-col items-center'>
          <img
            src={imageId ? ITEM_IMG_CDN_UR + imageId : ITEM_IMG_DEAFULT}
            alt=''
            className='rounded-md md:w-60 md:h-40 w-40 shadow-sm'
          />
          <div className='md:px-6 md:py-3 px-3 py-1 bg-white shadow-md rounded-full text-xl font-bold text-green-400 mt-[-2rem] flex justify-center items-center space-x-5'>
            <button
              onClick={() => {
                dispatch({ type: 'REMOVE_FROM_CART', payload: id })
                dispatch({ type: 'CALCULATE_TOTAL_ITEMS_IN_CART' })
              }}
            >
              <MdRemove className='text-3xl' />
            </button>
            <span>{qty}</span>
            <button
              onClick={() => {
                dispatch({ type: 'ADD_TO_CART', payload: cartitem })
                dispatch({ type: 'CALCULATE_TOTAL_ITEMS_IN_CART' })
              }}
            >
              <MdAdd className='text-3xl' />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CartMenuList
