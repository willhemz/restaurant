import React, { useContext, useReducer, useState } from 'react'
import { reducer } from './reducer'

const contextAPI = React.createContext()
const defaultState = {
  loading: false,
}
const GenContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  return (
    <contextAPI.Provider value={{ ...state }}>{children}</contextAPI.Provider>
  )
}

export const useGenContext = () => {
  return useContext(contextAPI)
}

export default GenContext
