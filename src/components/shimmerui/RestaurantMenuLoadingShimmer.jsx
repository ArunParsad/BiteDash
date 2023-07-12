import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Container from '../layout/Container'
import MenuListItemsShimmer from './MenuListItemsShimmer'
const RestaurantMenuLoadingShimmer = () => {
  const value = [1, 2, 3, 4, 5]
  return (
    <Container>
      <div className='grid md:grid-cols-12 mt-5 gap-x-2 h-[65vh] mx-5 grid-cols-1'>
        <div className='col-span-3 bg-white shadow-md p-4 rounded-md space-y-3 h-[65vh] overflow-hide scrollbar-hide hidden md:block'>
          <Skeleton count={20} />
        </div>
        <div className='col-span-9 space-y-2 overflow-hidden scrollbar-hide'>
          {value.map((item, index) => {
            return <MenuListItemsShimmer key={index} />
          })}
        </div>
      </div>
    </Container>
  )
}

export default RestaurantMenuLoadingShimmer
