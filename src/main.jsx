import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Feed from '../src/components/layout/Feed.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContextProvider from './components/context/Context.jsx'
import RestauranDetails from './components/pages/RestauranDetails.jsx'

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
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
)
