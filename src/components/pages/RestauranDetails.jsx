import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { RESTAURANT_DETAILS_URL } from '../../assets/constant'
import { useEffect } from 'react'
import Container from '../layout/Container'
import RestaurantHeader from '../layout/RestaurantHeader'
import { useGlobalContext } from '../context/Context'
import RestaurantMenuList from '../layout/RestaurantMenuList'
const RestauranDetails = () => {
  const { id } = useParams()
  const {
    dispatch,
    restaurantInfo,
    isRestaurantInfoLoading,
    restaurantMenuList,
    isRestaurantMenuList,
  } = useGlobalContext()

  useEffect(() => {
    getRestaurantDetails()

    return () => {
      dispatch({ type: 'RESDETAIL_UNMOUNT' })
    }
  }, [])

  const getRestaurantDetails = async () => {
    const res = await fetch(RESTAURANT_DETAILS_URL + id)
    const data = await res.json()
    const {
      name,
      areaName,
      cuisines,
      totalRatingsString,
      avgRating,
      sla: { slaString },
    } = await data?.data?.cards[0]?.card?.card?.info

    const restaurantInfo = {
      name,
      areaName,
      cuisines,
      totalRatingsString,
      avgRating,
      slaString,
    }
    const restaurantMenuList = await data?.data?.cards[2]?.groupedCard
      ?.cardGroupMap?.REGULAR?.cards

    dispatch({ type: 'RESTAURANT_INFO', payload: restaurantInfo })
    dispatch({ type: 'RESTAURANTMENULIST_INFO', payload: restaurantMenuList })
  }

  return (
    <Container>
      <RestaurantHeader
        {...restaurantInfo}
        isRestaurantInfoLoading={isRestaurantInfoLoading}
      />
      <RestaurantMenuList {...restaurantMenuList} />
    </Container>
  )
}

export default RestauranDetails
