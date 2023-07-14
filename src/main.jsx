import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Feed from '../src/components/layout/Feed.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContextProvider from './components/context/Context.jsx'
import RestauranDetails from './components/pages/RestauranDetails.jsx'
import Cart from './components/pages/Cart.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Feed />,
      },
      {
        path: '/restauran/:id',
        element: <RestauranDetails />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <RouterProvider router={router} />
  </ContextProvider>
)
