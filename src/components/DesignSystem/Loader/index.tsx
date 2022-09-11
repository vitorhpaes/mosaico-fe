import React from 'react'
import ReactLoading from 'react-loading'
import styled, { useTheme } from 'styled-components'

const StyledLoaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Loader: React.FC = () => {
    const theme = useTheme()
    return (
        <StyledLoaderWrapper>
            <ReactLoading type={'bubbles'} color={theme.palette.main.primary} />
        </StyledLoaderWrapper>
    )
}

export default Loader
