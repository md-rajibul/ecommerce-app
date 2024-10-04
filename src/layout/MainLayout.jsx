import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'

export default function MainLayout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <div className='min-h-screen'></div>
      <Footer/>
    </>
  )
}
