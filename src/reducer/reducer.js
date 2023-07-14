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
      const filteredArray = payload
        .filter((item) => {
          if (item.card.card.title !== 'Top Picks') {
            return true // Include the item in the filtered array
          }

          return false // Exclude the item from the filtered array
        })
        .filter((item) => {
          if (!item.card.card.badges) {
            return true
          }
          return false
        })
        .filter((item) => {
          if (!item.card.card.categories) {
            return true
          }
          return false
        })
        .filter((item) => {
          if (
            item.card.card['@type'] !==
            'type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo'
          ) {
            return true
          }
          return false
        })
        .filter((item) => {
          if (
            item.card.card['@type'] !==
            'type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress'
          ) {
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
          menuItems =
            state.restaurantMenuList[key]?.card?.card?.carousel ||
            state.restaurantMenuList[key]?.card?.card?.itemCards
        }
      }

      return { ...state, menuListItems: menuItems }

    case 'ADD_TO_CART':
      // Find the index of the item in the cart
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === payload.id
      )

      // If the item exists in the cart, update its quantity
      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart]
        updatedCart[existingItemIndex].qty += 1
        return { ...state, cart: updatedCart }
      }

      // If the item does not exist in the cart, add it
      const newState = { ...state, cart: [...state.cart, payload] }

      return newState

    case 'CALCULATE_TOTAL_ITEMS_IN_CART':
      const totalItemsInCart = state.cart.reduce((cur, acc) => {
        return (cur += acc.qty)
      }, 0)

      return { ...state, totalCartItems: totalItemsInCart }

    case 'REMOVE_FROM_CART':
      const itemIndex = state.cart.findIndex((item) => item.id === payload)
      const updatedCart = [...state.cart]

      if (itemIndex !== -1) {
        // Decrease the quantity of the item
        updatedCart[itemIndex].qty -= 1

        // Remove the item from the cart if the quantity becomes zero
        if (updatedCart[itemIndex].qty === 0) {
          updatedCart.splice(itemIndex, 1)
        }
      }

      return {
        ...state,
        cart: updatedCart,
      }

    case 'GET_TOTAL_AMOUNT':
      let totalAmountPrice = 0

      for (let i = 0; i < state.cart.length; i++) {
        const price = (state.cart[i].price || state.cart[i].defaultPrice) / 100
        const qty = state.cart[i].qty
        const itemPrice = price * qty
        totalAmountPrice += itemPrice
      }

      return { ...state, totalAmount: totalAmountPrice }
  }
}
