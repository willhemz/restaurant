import { createBrowserRouter as browse } from 'react-router-dom'
import { Layout, Error, Register, Login } from './component'
import {
  Home,
  Category,
  Meal,
  Drink,
  Cart,
  Account,
  Notification,
  Wishlist,
} from './pages'

export const router = browse([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category/:id',
        element: <Category />,
      },
      {
        path: '/category/meal/:id',
        element: <Meal />,
      },
      {
        path: '/category/drink/:id',
        element: <Drink />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/account',
        element: <Account />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/notification',
        element: <Notification />,
      },
      {
        path: '/wishlist',
        element: <Wishlist />,
      },
    ],
  },
])
