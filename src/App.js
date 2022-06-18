import React from 'react'
import HeaderComp from './Component/HeaderComp'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import DetailPage from "./DetailPage"
import Register from './Component/Register'
import HomePage from './Component/HomePage'
import SignIn from './Component/SignIn'
import PrivateRoute from './Component/ReduxFile/PrivateRoute'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <HeaderComp/>
      </div>
      <Routes>
        <Route path = "/" element={
          <PrivateRoute>
            <HomePage/>
          </PrivateRoute>
        }/>

        <Route path = "/register"  element={<Register/>}/>
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/details/:id" element={<DetailPage/>} />

      </Routes>
    </BrowserRouter>
   
  )
}

export default App
