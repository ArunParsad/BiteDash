import React, { useEffect, useState } from 'react'
import Header from './components/layout/Header'
import Feed from './components/layout/Feed'


const filterUI = (allrestaurants, searchText) => {
  const fillterData = allrestaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase().includes(searchText?.toLowerCase()))
  return fillterData
}

const App = () => {
  const [allrestaurants, setAllrestaurants] = useState([])
  const [filteredSestaurant, setFilteredSestaurant] = useState([])
  const [feedUI, setFeedUI] = useState([])
  const [searchText, setSearchText] = useState()


  const getallrestaurants = async () => {
    const res = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.2066718&lng=72.8371469&page_type=DESKTOP_WEB_LISTING'
    )

    const data = await res.json()
    setAllrestaurants(data)
    setFeedUI(data?.data?.cards[2]?.data?.data?.cards)
  }

  const filterFeed = () => {
    const filterData = filterUI(allrestaurants?.data?.cards[2]?.data?.data?.cards, searchText)
    setFeedUI(filterData)
    setSearchText('')
  }

  const resetFeedUI = () => {
    setFeedUI(allrestaurants?.data?.cards[2]?.data?.data?.cards)
  }


  useEffect(() => {
    getallrestaurants()
  }, [])

  return (
    <>
      <Header setSearchText={setSearchText} searchText={searchText} filterFeed={filterFeed} resetFeedUI={resetFeedUI} />
      <Feed feedUI={feedUI} />
    </>
  )
}

export default App
