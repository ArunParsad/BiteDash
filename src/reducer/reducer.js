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
  }
}
