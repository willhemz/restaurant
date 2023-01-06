import { createBrowserRouter as browse } from 'react-router-dom'
import { Layout, Error } from './component'
import { Home, Category, Meal } from './pages'

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
    ],
  },
])
