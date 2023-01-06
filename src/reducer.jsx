export const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_TERM':
      state = { ...state, searchTerm: action.payload }
      break

    default:
      break
  }
  return state
}
