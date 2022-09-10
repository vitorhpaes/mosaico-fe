import styled from 'styled-components'
import { space, SpaceProps, layout, LayoutProps } from 'styled-system'

const SectionContainer = styled.section<SpaceProps | LayoutProps>`
    padding-top: ${({ theme }) => theme.applySpace('largeX')};
    padding-bottom: ${({ theme }) => theme.applySpace('large')};
    padding-left: ${({ theme }) => theme.applySpace('large')};
    padding-right: ${({ theme }) => theme.applySpace('large')};

    background-color: ${({ theme }) => theme.palette.background.default};
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    ${space}
    ${layout}
`

export default SectionContainer
