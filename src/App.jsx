import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Articles from './Pages/Articles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <div className='bg-slate-600'>
      <Navbar />
      </div>
      <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/contact' element={<Contact/>} /> */}
      <Route path='/articles' element={<Articles/>} />
      {/* <Route path='/services' element={<Services/>} /> */}
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
