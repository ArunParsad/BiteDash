import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const MenuListItemsShimmer = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='h-40 w-60'>
        <Skeleton count={6} width={'100%'} />
      </div>
      <div className='w-60 h-40'>
        <Skeleton width={'100%'} height={'100%'} />
      </div>
    </div>
  )
}

export default MenuListItemsShimmer
