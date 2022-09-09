import React from 'react'

import { Outlet } from 'react-router-dom'
import { DefaultNavbar, StackNavbar } from './../Navbar'

const LayoutProvider: React.FC = () => {
    return (
        <>
            <DefaultNavbar />
            <Outlet />
        </>
    )
}

export default LayoutProvider
