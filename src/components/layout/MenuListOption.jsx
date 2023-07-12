import React from 'react'

const MenuListOption = ({
 selected,
 restaurantMenuList,
 keyIndex,
 countItem,
 onHandelClick,
}) => {

 const onHandelChange = (title) => {
  console.log(title)
 }

 return (
  <option value={restaurantMenuList[keyIndex]?.card?.card?.title}>
   {restaurantMenuList[keyIndex]?.card?.card?.title}
  </option>
 )
}

export default MenuListOption
