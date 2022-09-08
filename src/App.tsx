import React from 'react'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import LayoutProvider from './components/LayoutProvider'
import Home from './pages/Home'
import queryClient from './services/queryClient'

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayoutProvider />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
