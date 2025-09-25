import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login  from './pages/Login'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
                <Route path='/login' element={<Login/>}/>
                  <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
