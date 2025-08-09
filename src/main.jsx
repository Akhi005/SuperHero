import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/pages/Home.jsx'
import HeroDetails from '@/pages/Details.jsx'

const router=createBrowserRouter([{
   path:'/',
   element:<App/>,
   children:[
     {
       path:'/',
       element:<Home/>
     },
     {
       path:'/records/:id',
       element:<HeroDetails/>
     }
   ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
