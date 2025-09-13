import React from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-gradient-to-r from-slate-900 to-slate-700 h-screen w-full text-white'>
        <Nav/>
        <main className='container mx-auto p-3'>
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout