import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const MenuListItemsShimmer = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='md:h-40 md:w-60 w-20 h-20 mb-10'>
        <Skeleton count={5} width={'100%'} height={'20%'} />
      </div>
      <div className='md:w-60 md:h-40 w-[8rem] h-[8rem]'>
        <Skeleton width={'100%'} height={'100%'} />
      </div>
    </div>
  )
}

export default MenuListItemsShimmer
