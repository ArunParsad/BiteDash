import React, { useEffect, useState } from 'react'
import Container from './Container'
import { useGlobalContext } from '../context/Context'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const RestaurantMenuList = (props) => {
  const restaurantMenuList = props
  const keys = Object.keys(restaurantMenuList)
  const [selected, setSelected] = useState('')
  const { dispatch, isRestaurantMenuListLoading } = useGlobalContext()

  useEffect(() => {
    keys.map((key) => {
      setSelected(restaurantMenuList[1]?.card?.card?.title)
    })
  }, [restaurantMenuList])

  useEffect(() => {
    return () => {
      dispatch({ type: 'UNMOUNT_RESMENU' })
    }
  }, [])

  if (isRestaurantMenuListLoading) {
    return (
      <Container>
        <div className='grid grid-cols-12 mt-5 gap-x-2'>
          <div className='col-span-3 bg-white shadow-md p-4 rounded-md space-y-3 h-[65vh] overflow-scroll scrollbar-hide'>
            <Skeleton count={10} />
          </div>
          <div className='col-span-9'>
            <Skeleton count={10} />
          </div>
        </div>
      </Container>
    )
  } else {
    return (
      <Container>
        <div className='grid grid-cols-12 mt-5 gap-x-2'>
          <ul className='col-span-3 bg-white shadow-md p-4 rounded-md space-y-3 h-[65vh] overflow-scroll scrollbar-hide'>
            {keys.map((key) => {
              if (restaurantMenuList[key]?.card?.card?.title) {
                return (
                  <li
                    key={key}
                    className={
                      selected === restaurantMenuList[key]?.card?.card?.title
                        ? 'text-md hover:cursor-pointer text-[#F77132] transition-all duration-75'
                        : 'text-md hover:cursor-pointer hover:text-[#F77132] transition-all duration-75'
                    }
                    onClick={() =>
                      setSelected(restaurantMenuList[key]?.card?.card?.title)
                    }
                  >
                    {restaurantMenuList[key]?.card?.card?.title}
                  </li>
                )
              }
            })}
          </ul>
          <div className='col-span-9 bg-white rounded-md shadow-md'></div>
        </div>
      </Container>
    )
  }
}

export default RestaurantMenuList
