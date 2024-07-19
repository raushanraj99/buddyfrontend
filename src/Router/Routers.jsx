import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Registration from '../Pages/UserAuth/Registration'
import Profile from '../Pages/UserAuth/Profile'
import Login from '../Pages/UserAuth/Login'
import Home from '../Pages/Home'

function Routers() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        
       </Routes>

    </div>
  )
}

export default Routers