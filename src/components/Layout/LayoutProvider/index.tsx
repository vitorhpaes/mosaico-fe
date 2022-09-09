import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

const LayoutProvider: React.FC = () => {
    return (
        <div>
            <Navbar>Dentro da navbar</Navbar>
            <Outlet />
        </div>
    )
}

export default LayoutProvider
