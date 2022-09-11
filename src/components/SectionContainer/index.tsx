import styled from 'styled-components'
import { space, SpaceProps, layout, LayoutProps, border, BorderProps } from 'styled-system'

interface SectionContainerProps {
    color?: 'default' | 'paper'
}

const SectionContainer = styled.section<
    (SpaceProps | LayoutProps | BorderProps) & SectionContainerProps
>`
    padding-top: ${({ theme }) => theme.applySpace('largeX')};
    padding-bottom: ${({ theme }) => theme.applySpace('large')};
    padding-left: ${({ theme }) => theme.applySpace('large')};
    padding-right: ${({ theme }) => theme.applySpace('large')};

    background-color: ${({ theme, color }) =>
        theme.palette.background[color ? color : 'default']};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    
    ${space}
    ${layout}
    ${border}
`

export default SectionContainer
