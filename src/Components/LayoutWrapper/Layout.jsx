import React from 'react'
import Header from './Header'
import Footer from './Footer'
import BottomNavbar from '../LayoutWrapper/BottomNavBar/BottomNavbar'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
            <BottomNavbar />
        </>
    )
}

export default Layout