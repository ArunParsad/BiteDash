import React, { useEffect, useState } from "react";
import Container from "./Container";
import { useGlobalContext } from "../context/Context";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MenuListCard from "../cards/MenuListCard";
const RestaurantMenuList = () => {
  const [selected, setSelected] = useState("");
  const {
    dispatch,
    isRestaurantMenuListLoading,
    menuListItems,
    restaurantMenuList,
  } = useGlobalContext();
  const keys = Object.keys(restaurantMenuList);
  const menuListItemsKeys = Object.keys(menuListItems);
  // Logs

  // Functions

  const onHandelClick = (key) => {
    setSelected(restaurantMenuList[key]?.card?.card?.title);
  };

  // Side Effects
  useEffect(() => {
    return () => {
      dispatch({ type: "UNMOUNT_RESMENU" });
    };
  }, []);

  useEffect(() => {
    dispatch({
      type: "FILTERED_MENU_LIST",
      payload: selected,
    });
  }, [selected]);

  useEffect(() => {
    setSelected(restaurantMenuList[1]?.card?.card?.title);
  }, [restaurantMenuList]);

  // UI

  if (isRestaurantMenuListLoading) {
    return (
      <Container>
        <div className="grid grid-cols-12 mt-5 gap-x-2">
          <div className="col-span-3 bg-white shadow-md p-4 rounded-md space-y-3 h-[65vh] overflow-scroll scrollbar-hide">
            <Skeleton count={10} />
          </div>
          <div className="col-span-9">
            <Skeleton count={10} />
          </div>
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <div className="grid grid-cols-12 mt-5 gap-x-2">
          <ul className="col-span-3 bg-white shadow-md p-4 rounded-md space-y-3 h-[65vh] overflow-scroll scrollbar-hide">
            {keys.map((key) => {
              if (restaurantMenuList[key]?.card?.card?.title) {
                const countItem =
                  restaurantMenuList[key]?.card?.card?.carousel?.length ||
                  restaurantMenuList[key]?.card?.card?.itemCards?.length;
                return (
                  <div
                    key={key}
                    className={
                      selected === restaurantMenuList[key]?.card?.card?.title
                        ? "text-md hover:cursor-pointer text-[#F77132] transition-all duration-75 flex space-x-2"
                        : "text-md hover:cursor-pointer hover:text-[#F77132] transition-all duration-75 flex space-x-2"
                    }
                    onClick={() => onHandelClick(key)}
                  >
                    <li>{restaurantMenuList[key]?.card?.card?.title}</li>
                    {countItem && (
                      <span className="bg-[#F77132] p-1 rounded-full text-white w-5 h-5 text-sm flex justify-center items-center">
                        {countItem}
                      </span>
                    )}
                  </div>
                );
              }
            })}
          </ul>
          <div className="col-span-9 bg-white rounded-md shadow-md px-10 py-5 h-[65vh] overflow-scroll scrollbar-hide p-2">
            {menuListItemsKeys.map((item) => {
              const itemObj = menuListItems[item];
              if (itemObj.type === "TopCarousel") {
                console.log(itemObj);
              } else {
                const {
                  name,
                  id,
                  imageId,
                  isBestseller,
                  isVeg,
                  category,
                  price,
                } = itemObj.card.info;
                const itemInfo = {
                  name,
                  id,
                  imageId,
                  isBestseller,
                  isVeg,
                  category,
                  price,
                };
                return <MenuListCard {...itemInfo} key={id} />;
              }
            })}
          </div>
        </div>
      </Container>
    );
  }
};

export default RestaurantMenuList;
