import { useAppSelector } from '@app/state/hooks'
import React from 'react'

import { Outlet } from 'react-router-dom'
import { DefaultNavbar, StackNavbar } from './../Navbar'

const LayoutProvider: React.FC = () => {
    const { navbar: navbarType } = useAppSelector((app) => app.layout)

    return (
        <>
            {navbarType === 'default' && <DefaultNavbar />}
            {navbarType === 'stack' && <StackNavbar />}
            <Outlet />
        </>
    )
}

export default LayoutProvider
