import styled from 'styled-components'
import { space, SpaceProps, layout, LayoutProps } from 'styled-system'

export const StyledCard = styled.div<SpaceProps | LayoutProps>`
    background-color: ${({ theme }) => theme.palette.background.paper};
    border-radius: 10px;
    ${space};
    ${layout};
`

export { default as ProductCard } from './HorizontalCard'
