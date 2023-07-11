import React, { useEffect, useState } from 'react'
import Container from './Container'
import { useGlobalContext } from '../context/Context'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import MenuListCard from '../cards/MenuListCard'
import RestaurantMenuLoadingShimmer from '../shimmerui/RestaurantMenuLoadingShimmer'
import MenuListItems from './MenuListItems'
const RestaurantMenuList = () => {
  const [selected, setSelected] = useState('')
  const [keys, setKeys] = useState([])
  const {
    dispatch,
    isRestaurantMenuListLoading,
    menuListItems,
    restaurantMenuList,
  } = useGlobalContext()
  const menuListItemsKeys = Object.keys(menuListItems)
  // Logs

  // Functions

  const onHandelClick = (key) => {
    setSelected(restaurantMenuList[key]?.card?.card?.title)
  }

  // Side Effects
  useEffect(() => {
    return () => {
      dispatch({ type: 'UNMOUNT_RESMENU' })
    }
  }, [])

  useEffect(() => {
    dispatch({
      type: 'FILTERED_MENU_LIST',
      payload: selected,
    })
  }, [selected])

  useEffect(() => {
    if (restaurantMenuList) {
      setSelected(restaurantMenuList[0]?.card?.card?.title)
      setKeys(Object.keys(restaurantMenuList))
    }
  }, [restaurantMenuList])

  // UI

  if (isRestaurantMenuListLoading) {
    return <RestaurantMenuLoadingShimmer />
  } else {
    return (
      <Container>
        <div className='grid grid-cols-12 mt-5 gap-x-2'>
          <ul className='col-span-3 bg-white shadow-md p-4 rounded-md space-y-3 h-[65vh] overflow-scroll scrollbar-hide'>
            {keys.map((key, index) => {
              const title = restaurantMenuList[key]?.card?.card?.title
              if (title) {
                const countItem =
                  restaurantMenuList[key]?.card?.card?.carousel?.length ||
                  restaurantMenuList[key]?.card?.card?.itemCards?.length


                // for now if restaurant has nested menu do not render

                if (restaurantMenuList[key]?.card?.card?.categories) {
                  return null
                }

                // render menu only one level deep
                return (
                  <MenuListItems
                    selected={selected}
                    restaurantMenuList={restaurantMenuList}
                    keyIndex={key}
                    countItem={countItem}
                    onHandelClick={onHandelClick}
                    key={index}
                  />
                )
              }
            })}
          </ul>
          <div className='col-span-9 bg-white rounded-md shadow-md px-10 py-5 h-[65vh] overflow-scroll scrollbar-hide p-2 space-y-3'>
            {menuListItemsKeys.map((item) => {
              const itemObj = menuListItems[item]
              if (itemObj.type === 'TopCarousel') {
                return null
              } else {
                const {
                  name,
                  id,
                  imageId,
                  isBestseller,
                  isVeg,
                  category,
                  price,
                  defaultPrice
                } = itemObj.card.info

                const itemInfo = {
                  name,
                  id,
                  imageId,
                  isBestseller,
                  isVeg,
                  category,
                  price,
                  defaultPrice
                }

                return <MenuListCard {...itemInfo} key={id} />
              }
            })}
          </div>
        </div>
      </Container>
    )
  }
}

export default RestaurantMenuList
