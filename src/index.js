import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './App'
import reportWebVitals from './reportWebVitals'
import GenContext from './context'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GenContext>
      <RouterProvider router={router} />
    </GenContext>
  </React.StrictMode>
)

reportWebVitals()
