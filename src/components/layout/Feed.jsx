import React from 'react'
import RestaurantCard from '../cards/RestaurantCard'
import Container from './Container'
import SkeletonCard from '../cards/SkeletonCard'
import { useGlobalContext } from '../context/Context'
import { Link } from 'react-router-dom'
const Feed = () => {
  const { feedUI, filteredSestaurant, isLoading } = useGlobalContext()
  if (isLoading) {
    return (
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center	 space-x-4 space-y-4'>
          {/* Skeletan Card */}
          {new Array(15).fill('').map((card, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </Container>
    )
  } else if (feedUI.length === 0 && filteredSestaurant.length === 0) {
    return (
      <>
        <div className='h-screen w-screen flex justify-center items-center'>
          <h1 className='text-2xl font-bold'>404 Not Found</h1>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Container>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center	 space-x-4 space-y-4'>
            {feedUI?.map((restaurant) => {
              return (
                <Link
                  key={restaurant?.data?.id}
                  to={`/restauran/${restaurant?.data?.id}`}
                >
                  <RestaurantCard {...restaurant?.data} />
                </Link>
              )
            })}
          </div>
        </Container>
      </>
    )
  }
}

export default Feed
