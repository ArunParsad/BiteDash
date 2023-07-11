export const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'FETCH_DATA':
      return {
        ...state,
        allrestaurants: [...payload],
        isLoading: false,
        feedUI: [...payload],
      }

    case 'FILTER_FEED':
      const filterData = state?.allrestaurants?.filter((restaurant) => {
        return restaurant?.data?.name
          ?.toLowerCase()
          .includes(payload?.toLowerCase())
      })

      return { ...state, feedUI: filterData }

    case 'RESET_UI':
      return { ...state, feedUI: state.allrestaurants }

    case 'RESTAURANT_INFO':
      return {
        ...state,
        restaurantInfo: payload,
        isRestaurantInfoLoading: false,
      }
    case 'RESDETAIL_UNMOUNT':
      return { ...state, isRestaurantInfoLoading: true }
    case 'RESTAURANTMENULIST_INFO':

      const filteredArray = payload.filter((item) => {
        if (item.card.card.title !== 'Top Picks') {
          return true; // Include the item in the filtered array
        }


        return false; // Exclude the item from the filtered array
      }).filter((item) => {
        if (!item.card.card.badges) {
          return true
        }
        return false
      }).filter((item) => {
        if (!item.card.card.categories) {
          return true
        }
        return false
      }).filter((item) => {
        if (item.card.card["@type"] !== "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo") {
          return true
        }
        return false
      }).filter((item) => {
        if (item.card.card["@type"] !== "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress") {
          return true
        }
        return false
      })





      return {
        ...state,
        restaurantMenuList: filteredArray,
        isRestaurantMenuListLoading: false,
      }

    case 'UNMOUNT_RESMENU':
      return { ...state, isRestaurantMenuListLoading: true }

    case 'FILTERED_MENU_LIST':

      let menuItems = {}
      for (const key in state.restaurantMenuList) {
        if (state.restaurantMenuList[key]?.card?.card?.title === payload) {
          menuItems = state.restaurantMenuList[key]?.card?.card?.carousel || state.restaurantMenuList[key]?.card?.card?.itemCards
        }
      }



      return { ...state, menuListItems: menuItems }
  }
}
