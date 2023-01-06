import React, { useContext, useEffect, useReducer } from 'react'
import { reducer } from './reducer'

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const contextAPI = React.createContext()
const defaultState = {
  loading: true,
  searchMeal: 'a',
  searchDrink: 'a',
  drinks: [],
  meals: [],
}
const GenContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const fetchMeals = async () => {
    dispatch({ type: 'LOADING' })
    try {
      const res = await fetch(`${url}${state.searchMeal}`)
      const data = await res.json()
      const { meals } = data
      console.log(meals)
      dispatch({ type: 'OFFLOAD' })
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   fetchMeals()
  // }, [])

  const searchMeal = (val) => {
    dispatch({ type: 'SEARCH_MEAL', payload: val })
  }
  const searchDrink = (val) => {
    dispatch({ type: 'SEARCH_DRINK', payload: val })
  }

  return (
    <contextAPI.Provider value={{ ...state, searchMeal, searchDrink }}>
      {children}
    </contextAPI.Provider>
  )
}

export const useGenContext = () => {
  return useContext(contextAPI)
}

export default GenContext
