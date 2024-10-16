import React from 'react'
import Header from '../Navbar/Header'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      <div className='main-content '>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
