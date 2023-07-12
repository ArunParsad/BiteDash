import React from 'react'
import Container from './Container'
import { RiMapPinFill } from 'react-icons/ri'
import { AiFillStar } from 'react-icons/ai'
import { CgTimelapse } from 'react-icons/cg'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const RestaurantHeader = ({
  name,
  areaName,
  cuisines,
  totalRatingsString,
  avgRating,
  slaString,
  isRestaurantInfoLoading,
}) => {
  if (isRestaurantInfoLoading) {
    return (
      <Container>
        <div className='flex justify-between'>
          <div className='w-40 h-40'>
            <Skeleton count={4} />
          </div>
          <div className='w-40 h-40'>
            <Skeleton count={4} />
          </div>
        </div>
      </Container>
    )
  } else {
    return (
      <Container>
        <div className='flex justify-between items-center'>
          <section className='text-gray-600 flex flex-col space-y-2'>
            <h2 className='md:text-3xl font-bold text-lg'>{name}</h2>
            <div className='flex space-x-2'>
              {cuisines?.map((cuisine, index) => {
                return (
                  <span
                    className='bg-[#F77132] md:px-2 md:py-1 flex justify-center items-center rounded-full text-white text-sm md:text-md px-1.5 py-0.5'
                    key={index}
                  >
                    {cuisine}
                  </span>
                )
              })}
            </div>
            <div className='flex space-x-2'>
              <div className='flex md:space-x-3 space-x-1 justify-center items-center'>
                <RiMapPinFill className='md:text-2xl text-md' />
                <span>{areaName}</span>
              </div>
              <div className='flex justify-center items-center md:space-x-3 space-x-1'>
                <CgTimelapse className='md:text-2xl text-md' />
                <span>{slaString}</span>
              </div>
            </div>
          </section>
          <section className='rounded-xl divide-x flex flex-col items-center justify-between border max-w-[7rem] py-4 px-2 space-y-2 bg-white shadow-sm divide-y'>
            <div className='flex items-center space-x-3'>
              <div className='p-2 border rounded-full'>
                <AiFillStar
                  className={
                    avgRating > 3
                      ? 'text-lg text-green-400'
                      : 'text-lg text-red-400'
                  }
                />
              </div>
              <span className='font-bold text-xl text-gray-600'>
                {avgRating}
              </span>
            </div>
            <div className='flex justify-between'>
              <div>{totalRatingsString}</div>
            </div>
          </section>
        </div>
      </Container>
    )
  }
}

export default RestaurantHeader
