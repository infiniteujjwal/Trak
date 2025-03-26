import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ErrorPage from './pages/Error.jsx'
import Home from './pages/Home.jsx'
import Pathway from './pages/Pathway.jsx'

const router = createBrowserRouter([
  {
  path: '/',
  element : <App/>,
  children: [{
    path: '/error',
    element: <ErrorPage/>
  },{
    path: '/',
    element:<Home/>
  }, {
    path:'/pathway',
    element:<Pathway/>
  }]


}
]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router = {router}/>
  </StrictMode>,
)
