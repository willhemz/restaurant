import React, { useContext, useReducer } from 'react'
import { reducer } from './reducer'

const contextAPI = React.createContext()
const defaultState = {
  loading: false,
  searchTerm: 'a',
  drinks: [],
  meals: [],
}
const GenContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSearch = (val) => {
    dispatch({ type: 'SEARCH_TERM', payload: val })
  }

  return (
    <contextAPI.Provider value={{ ...state, handleSearch }}>
      {children}
    </contextAPI.Provider>
  )
}

export const useGenContext = () => {
  return useContext(contextAPI)
}

export default GenContext
