import React from 'react'
import styled from 'styled-components'
import DefaultNavbar from './DefaultNavbar'

const StyledNavbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${({ theme }) => theme.palette.background.paper};
    
    width: 100%;
    height: ${({ theme }) => theme.applySpace('largeXX')};

    padding-left: ${({ theme }) => theme.applySpace('large')};
    padding-right: ${({ theme }) => theme.applySpace('large')};

    padding-top: ${({ theme }) => theme.applySpace('small')};

    margin-bottom: ${({ theme }) => theme.applySpace('large')};
`

interface NavbarProps {
    children: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
    return <StyledNavbar>{children}</StyledNavbar>
}

export default Navbar

export { default as DefaultNavbar } from './DefaultNavbar'
export { default as StackNavbar } from './DefaultNavbar'
