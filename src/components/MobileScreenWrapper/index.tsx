import React from 'react'
import styled from 'styled-components'
import { isMobile } from '@app/driver/device'

// create mocked mobile screen if current device is not mobile
const StyledMobileScreen = styled.div`
    width: ${isMobile ? '100vw' : '375px'};
    height: ${isMobile ? '100vh' : '664px'};
    margin-left: auto;
    margin-right: auto;
    background-color: ${({ theme }) => theme.palette.background.paper};
`

const StyledWrapperScreen = styled.div`
    width: 100vw;
    height: 100vh;
    padding-top: ${({ theme }) => theme.applySpace('large')};
    background-color: ${({ theme }) =>
        isMobile ? 'none' : theme.palette.grey.main};
`

interface MobileScreenWrapperProps {
    children: React.ReactNode
}

const MobileScreenWrapper: React.FC<MobileScreenWrapperProps> = ({
    children,
}) => {
    return (
        <StyledWrapperScreen>
            <StyledMobileScreen>{children}</StyledMobileScreen>
        </StyledWrapperScreen>
    )
}

export default MobileScreenWrapper
