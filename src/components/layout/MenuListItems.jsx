import React from 'react'

const MenuListItems = ({
  selected,
  restaurantMenuList,
  keyIndex,
  countItem,
  onHandelClick,
}) => {
  return (
    <div
      className={
        selected === restaurantMenuList[keyIndex]?.card?.card?.title
          ? 'text-md hover:cursor-pointer text-[#F77132] transition-all duration-75 flex space-x-2'
          : 'text-md hover:cursor-pointer hover:text-[#F77132] transition-all duration-75 flex space-x-2'
      }
      onClick={() => onHandelClick(keyIndex)}
    >
      <li>{restaurantMenuList[keyIndex]?.card?.card?.title}</li>
      {countItem && (
        <span className='bg-[#F77132] p-1 rounded-full text-white w-5 h-5 text-sm flex justify-center items-center'>
          {countItem}
        </span>
      )}
    </div>
  )
}

export default MenuListItems
