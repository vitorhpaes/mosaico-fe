import React from 'react'
import { QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'
import theme from './assets/styles/theme'

import queryClient from '@services/queryClient'

import MobileScreenWrapper from '@components/MobileScreenWrapper'
import GlobalStyle from './assets/styles/GlobalStyles'
import SystemRoutes from './routes'

import { store } from './state/store'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <MobileScreenWrapper>
                        <SystemRoutes />
                    </MobileScreenWrapper>
                </ThemeProvider>
            </QueryClientProvider>
        </Provider>
    )
}

export default App
