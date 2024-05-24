import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Signin from './pages/Signin'
import Signup from './pages/Signup'


export default function App() {
  return (<BrowserRouter>
  <Routes>
    <Route path='/' element= {<Home />} />
    <Route path='/About' element = {<About />} />
    <Route path='/Prfile' element = {<Profile />} />
    <Route path='/Signin' element = {<Signin />} />
    <Route path='/Signup' element = {<Signup />} />
  </Routes>
  </BrowserRouter>
  )
}
