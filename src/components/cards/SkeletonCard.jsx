import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const SkeletonCard = () => {
  return (
    <div className='w-[18rem] h-[20rem] bg-gray-300 rounded-md p-3'>
      <div className='w-full h-[50%]'>
        <Skeleton width={'100%'} height={'80%'} />
      </div>
      <Skeleton count={4} />
    </div>
  )
}

export default SkeletonCard
