import React from 'react'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import theme from './assets/styles/theme'

import queryClient from './services/queryClient'

import LayoutProvider from './components/LayoutProvider'

import Home from './pages/Home'

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LayoutProvider />}>
                            <Route index element={<Home />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default App
