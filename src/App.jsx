import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Home from './pages/Home'
import Footer from './component/Footer'
import Waves from './component/Waves'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
   <Outlet/>
  
    
    </>
  )
}

export default App
