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
    case 'SET_CONTENT':
      state = { ...state, meals: action.payload }
      break
    case 'SET_DRINKS':
      state = { ...state, drinks: action.payload }
      break
    case 'REMOVE_CONTENT':
      state = { ...state, meals: [] }
      break
    case 'CART':
      state = {
        ...state,
        cart: [...state.cart, action.payload],
      }
      break
    case 'CART_NUMBER':
      state = {
        ...state,
        cartNumber: state.cart.length,
      }
      break
    case 'ERROR':
      state = { ...state, loading: false, error: true }
      break
    case 'TOTAL':
      const total = state.cart
        .map((item) => item.id)
        .reduce((a, b) => parseInt(a) + parseInt(b), 0)
      state = { ...state, price: total }
      break

    default:
      state = { ...state }
  }
  return state
}
