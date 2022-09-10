import React from 'react'
import {
    BrowserRouter,
    IndexRouteProps,
    LayoutRouteProps,
    PathRouteProps,
    Route,
    Routes,
} from 'react-router-dom'

import LayoutProvider from '@components/Layout/LayoutProvider'

import Home from '@pages/Home'
import Product from '@app/pages/Product'

const SystemRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutProvider />}>
                    <Route index element={<Home />} />
                    <Route path="product" element={<Product navbar="stack" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default SystemRoutes
