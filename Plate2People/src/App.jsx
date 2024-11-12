import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Donate from './components/Donar'
import Receive from './components/Receive'
import Login from './components/Login'
import Signup from './components/Signup'
function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
          
          <Routes>
              <Route path='/' element={
                <>
                  <Navbar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                  <Home isLoggedIn={isLoggedIn}/>
                </>
              }/>
              <Route path='/login' element={
                <Login setIsLoggedIn={setIsLoggedIn}/>
              }/>
              <Route path='/signup' element={
                <Signup/>
              }/>
              <Route path='/donate' element={
                <>
                  <Navbar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                  <Donate/>
                </>
              }/>
              <Route path='/receive' element={
                <>
                  <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                  <Receive/>
                </>
              }/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
