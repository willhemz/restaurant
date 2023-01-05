import { createBrowserRouter as browse } from 'react-router-dom'
import { Layout, Error } from './component'
import { Home } from './pages'

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
    ],
  },
])
