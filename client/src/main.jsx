

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './pages/Layout'
import ErrorPage from './pages/ErrorPage'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import UserProvider from './context/userContext'


const router = createBrowserRouter([
  {
    
    path:"/",
    element:<UserProvider><Layout/></UserProvider>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true,element:<Home/>},
      {path:"register",element:<Register/>},
      {path:"login",element:<Login/>}

    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
)
