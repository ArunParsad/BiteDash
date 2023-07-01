import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { URL } from './../../assets/constant'

export const context = createContext()
import { reducer } from '../../reducer/reducer'
const ContextProvider = ({ children }) => {
  const initalState = {
    allrestaurants: [],
    feedUI: [],
    filteredSestaurant: [],
    isLoading: true,
    restaurantInfo: {},
    isRestaurantInfoLoading: true,
  }

  const [state, dispatch] = useReducer(reducer, initalState)

  const getRestaurants = async () => {
    const res = await fetch(URL)
    const data = await res.json()
    dispatch({
      type: 'FETCH_DATA',
      payload: data?.data?.cards[2]?.data?.data?.cards,
    })
  }

  useEffect(() => {
    getRestaurants()
  }, [])

  return (
    <context.Provider value={{ ...state, dispatch }}>
      {children}
    </context.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(context)
}

export default ContextProvider
