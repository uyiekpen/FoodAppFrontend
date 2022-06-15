import React from 'react'
import HeaderComp from './Component/HeaderComp'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from './Component/Register'
import HomePage from './Component/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <HeaderComp/>
      </div>
      <Routes>
        <Route path = "/" element={<HomePage/>}/>

        <Route path = "/register"  element={<Register/>}/>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
