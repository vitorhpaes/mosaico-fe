import React from 'react'

import { Outlet } from 'react-router-dom'

const LayoutProvider: React.FC = () => {
    return (
        <div>
            layout
            <Outlet />
        </div>
    )
}

export default LayoutProvider
