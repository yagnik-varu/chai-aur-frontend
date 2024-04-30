import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Link } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import { store } from '../app/store'
import { Provider } from 'react-redux'

function Layout() {
  return (
    <CookiesProvider>
    <Provider store={store}>

    
    <div className='mt-20'>
        <Navbar></Navbar>
        <Outlet/>
        <Link to="/">home</Link>
        <Link to="/contact">contact</Link>
        <Footer></Footer>
      
    </div>
    </Provider>
  </CookiesProvider>
  )
}

export default Layout
