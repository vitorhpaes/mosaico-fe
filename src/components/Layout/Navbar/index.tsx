import React from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.nav`
    background-color: ${({ theme }) => theme.palette.background.paper};
    width: 100%;
    height: ${({ theme }) => theme.applySpace('large')};
`

interface NavbarProps {
    children: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
    return <StyledNavbar>{children}</StyledNavbar>
}

export default Navbar
