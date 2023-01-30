import { createBrowserRouter as browse } from 'react-router-dom'
import { Layout, Error, Register, Login, Dashboard, Profile } from './component'
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
        children: [
          {
            path: '/account/dashboard',
            element: <Dashboard />,
          },
          {
            path: '/account/wishlist',
            element: <Wishlist />,
          },
          {
            path: '/account/profile',
            element: <Profile />,
          },
        ],
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
