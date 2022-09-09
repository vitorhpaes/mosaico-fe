import React from 'react'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { isMobile } from './driver/device'
import theme from './assets/styles/theme'

import queryClient from './services/queryClient'

import LayoutProvider from './components/Layout/LayoutProvider'

import Home from './pages/Home'
import MobileScreenWrapper from './components/MobileScreenWrapper'
import GlobalStyle from './assets/styles/GlobalStyles'

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <MobileScreenWrapper>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<LayoutProvider />}>
                                <Route index element={<Home />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </MobileScreenWrapper>
            </ThemeProvider>
        </QueryClientProvider>
    )
}

export default App
