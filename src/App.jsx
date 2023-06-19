import React, { useEffect, useState } from 'react'
import Header from './components/layout/Header'
import Feed from './components/layout/Feed'

const App = () => {
  const [allrestaurant, setAllrestaurant] = useState([])
  const [filteredSestaurant, setFilteredSestaurant] = useState([])
  const [feedUI, setFeedUI] = useState([])
  const getallrestaurants = async () => {
    const res = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2066718&lng=72.8371469&page_type=DESKTOP_WEB_LISTING'
    )

    const data = await res.json()
    setAllrestaurant(data)
    setFeedUI(data?.data?.cards[2]?.data?.data?.cards)
  }
  useEffect(() => {
    getallrestaurants()
  }, [])

  return (
    <>
      <Header />
      <Feed feedUI={feedUI} />
    </>
  )
}

export default App
