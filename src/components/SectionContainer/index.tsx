import styled from 'styled-components'
import { space, SpaceProps, layout, LayoutProps } from 'styled-system'

const SectionContainer = styled.section<SpaceProps | LayoutProps>`
    padding-top: ${({ theme }) => theme.applySpace('largeX')};
    padding-bottom: ${({ theme }) => theme.applySpace('large')};
    padding-left: ${({ theme }) => theme.applySpace('standard')};
    padding-right: ${({ theme }) => theme.applySpace('standard')};

    background-color: ${({ theme }) => theme.palette.background.default};
    border-top-left-radius: ${({ theme }) => theme.applySpace('largeX')};
    border-top-right-radius: ${({ theme }) => theme.applySpace('largeX')};
    ${space}
    ${layout}
`

export default SectionContainer
