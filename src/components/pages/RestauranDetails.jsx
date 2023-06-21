import React from 'react'
import { useParams } from 'react-router-dom'
import { RESTAURANT_DETAILS_URL } from '../../assets/constant'
import { useEffect } from 'react'
const RestauranDetails = () => {
  const { id } = useParams()

  useEffect(() => {
    getRestaurantDetails()
  }, [])

  const getRestaurantDetails = async () => {
    const res = await fetch(RESTAURANT_DETAILS_URL + id)
    const data = await res.json()
    console.log(data)
  }

  return <div>ID : {id} </div>
}

export default RestauranDetails
