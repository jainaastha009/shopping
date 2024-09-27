import React, { useState } from 'react'
import { Outlet, useNavigate, useNavigation } from 'react-router-dom'
// import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Loading from './Loading'

const HomeLayout = () => {
  const navigate  =  useNavigation()
  const ispageLoading= navigate.state === 'loading'

  return (
    <div>
        {/* <Header/> */}
        <Navbar/>
        {ispageLoading ?<Loading/>:<section>        <Outlet/>
          </section>}
    </div>
  )
}

export default HomeLayout
