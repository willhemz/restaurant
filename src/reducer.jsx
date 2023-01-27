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
      action.payload.type === 'cart'
        ? (state = {
            ...state,
            cart: [...state.cart, action.payload.val],
          })
        : (state = {
            ...state,
            wishlist: [...state.wishlist, action.payload.val],
          })
      break
    case 'CART_NUMBER':
      state = {
        ...state,
        cartNumber: state.cart.length,
      }
      break
    case 'WISH_NUMBER':
      state = {
        ...state,
        wishNumber: state.wishlist.length,
      }
      break
    case 'REMOVE_WISHLIST':
      let newList = state.wishlist.filter((item) => item.id !== action.payload)
      state = { ...state, wishlist: newList }
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
    case 'REGISTER':
      state = { ...state, login: action.payload }
      break
    case 'LOGIN':
      state = action.payload
      break
    case 'LOGOUT':
      state = { ...state, login: null }
      break
    case 'USER_ERROR':
      state = { ...state, userError: true }
      break
    case 'OFF_ERROR':
      state = { ...state, userError: false }
      break

    default:
      state = { ...state }
  }
  return state
}
