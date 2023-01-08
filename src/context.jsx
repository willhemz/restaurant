import React, { useCallback, useContext, useEffect, useReducer } from 'react'
import { reducer } from './reducer'

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const link = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const contextAPI = React.createContext()
const defaultState = {
  loading: true,
  isError: false,
  searchMeal: 'a',
  searchDrink: 'a',
  drinks: [],
  meals: [],
  cart: [],
  cartNumber: 0,
  price: 0,
  login: { id: new Date().getDate().toString(), email: '', password: '' },
}
const GenContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const fetchMeals = useCallback(async () => {
    dispatch({ type: 'LOADING' })
    try {
      const res = await fetch(`${url}${state.searchMeal}`)
      const data = await res.json()
      const { meals } = data
      if (meals) {
        const newMeals = meals.map((item) => {
          const {
            idMeal,
            strMeal,
            strMealThumb,
            strCategory,
            strArea,
            strIngredient1: ig1,
            strIngredient2: ig2,
            strIngredient3: ig3,
            strIngredient4: ig4,
            strIngredient5: ig5,
            strIngredient6: ig6,
            strIngredient7: ig7,
            strIngredient8: ig8,
            strIngredient9: ig9,
            strIngredient10: ig10,
          } = item
          return {
            id: idMeal,
            name: strMeal,
            image: strMealThumb,
            category: strCategory,
            area: strArea,
            ingredients: [ig1, ig2, ig3, ig4, ig5, ig6, ig7, ig8, ig9, ig10],
          }
        })
        dispatch({ type: 'SET_CONTENT', payload: newMeals })
      } else {
        dispatch({ type: 'REMOVE_CONTENT' })
      }
      dispatch({ type: 'OFFLOAD' })
    } catch (error) {
      console.log(error)
      dispatch({ type: 'ERROR' })
    }
  }, [state.searchMeal])

  useEffect(() => {
    fetchMeals()
  }, [fetchMeals])

  const fetchDrinks = useCallback(async () => {
    dispatch({ type: 'LOADING' })
    try {
      const res = await fetch(`${link}${state.searchDrink}`)
      const data = await res.json()
      const { drinks } = data
      if (drinks) {
        const newDrinks = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strCategory,
            strAlcoholic,
            strGlass,
            strIngredient1: ig1,
            strIngredient2: ig2,
            strIngredient3: ig3,
            strIngredient4: ig4,
            strIngredient5: ig5,
            strIngredient6: ig6,
            strIngredient7: ig7,
            strIngredient8: ig8,
            strIngredient9: ig9,
            strIngredient10: ig10,
          } = item
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            category: strCategory,
            type: strAlcoholic,
            glass: strGlass,
            ingredients: [ig1, ig2, ig3, ig4, ig5, ig6, ig7, ig8, ig9, ig10],
          }
        })
        dispatch({ type: 'SET_DRINKS', payload: newDrinks })
      } else {
        dispatch({ type: 'REMOVE_CONTENT' })
      }
      dispatch({ type: 'OFFLOAD' })
    } catch (error) {
      console.log(error)
      dispatch({ type: 'ERROR' })
    }
  }, [state.searchDrink])

  useEffect(() => {
    fetchDrinks()
  }, [fetchDrinks])

  const handleMeal = (val) => {
    dispatch({ type: 'SEARCH_MEAL', payload: val })
  }
  const handleDrink = (val) => {
    dispatch({ type: 'SEARCH_DRINK', payload: val })
  }

  const handleCart = (val) => {
    if (state.cart.some((item) => item.name === val.name)) {
      return state
    }
    dispatch({ type: 'CART', payload: val })
  }

  const handleTotal = useCallback(() => {
    state.cart.length < 1 ? (state.price = 0) : dispatch({ type: 'TOTAL' })
  }, [state])

  useEffect(() => {
    dispatch({ type: 'CART_NUMBER' })
    handleTotal()
  }, [state.cart, handleTotal])

  return (
    <contextAPI.Provider
      value={{ ...state, handleMeal, handleDrink, handleCart }}>
      {children}
    </contextAPI.Provider>
  )
}

export const useGenContext = () => {
  return useContext(contextAPI)
}

export default GenContext
