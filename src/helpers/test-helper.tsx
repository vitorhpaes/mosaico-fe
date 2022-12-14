import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '@app/assets/styles/theme'

import { Provider } from 'react-redux'
import { store } from '@app/state/store'

import { QueryClientProvider } from 'react-query'
import queryClient from '@services/queryClient'
import GlobalStyle from '@app/assets/styles/GlobalStyles'
import { BrowserRouter } from 'react-router-dom'

interface WrapperProps {
    children: React.ReactNode
}

export const TestElementWrapper: React.FC<WrapperProps> = ({ children }) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        {children}
                    </ThemeProvider>
                </QueryClientProvider>
            </BrowserRouter>
        </Provider>
    )
}
