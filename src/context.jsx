import React, {
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { reducer } from './reducer'

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

const link = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const contextAPI = React.createContext()
const getLocalStorage = () => {
  let state = localStorage.getItem('state')
  if (state) {
    return (state = JSON.parse(state))
  } else {
    return {
      loading: true,
      isError: false,
      searchMeal: 'a',
      searchDrink: 'a',
      drinks: [],
      meals: [],
      cart: [],
      wishlist: [],
      order: [],
      cartNumber: 0,
      wishNumber: 0,
      orderNumber: 0,
      price: 0,
      login: null,
    }
  }
}
const defaultState = getLocalStorage()
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
    state.cart.length < 1 ? (state.price = 0) : dispatch({ type: 'TOTAL' })
  }

  useEffect(() => {
    dispatch({ type: 'CART_NUMBER' })
  }, [state.cart])

  const handleData = (data) => {
    dispatch({ type: 'REGISTER', payload: data })
  }

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state))
  }, [state])

  const [show, setShow] = useState(false)

  const openView = () => setShow(true)
  const closeView = () => setShow(false)

  return (
    <contextAPI.Provider
      value={{
        ...state,
        handleMeal,
        handleDrink,
        handleCart,
        handleData,
        show,
        openView,
        closeView,
      }}>
      {children}
    </contextAPI.Provider>
  )
}

export const useGenContext = () => {
  return useContext(contextAPI)
}

export default GenContext
