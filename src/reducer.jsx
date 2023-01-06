export const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_MEAL':
      state = { ...state, searchMeal: action.payload }
      break
    case 'SEARCH_DRINK':
      state = { ...state, searchDrink: action.payload }
      break
    case 'LOADING':
      state = { ...state, loading: true }
      break
    case 'OFFLOAD':
      state = { ...state, loading: false }
      break

    default:
      break
  }
  return state
}
