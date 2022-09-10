import React from 'react'
import styled from 'styled-components'
import { space, SpaceProps, layout, LayoutProps, border, BorderProps } from 'styled-system'
import HorizontalCard from './HorizontalCard'
import VerticalCard from './VerticalCard'

export const StyledCard = styled.div<SpaceProps | LayoutProps | BorderProps>`
    background-color: ${({ theme }) => theme.palette.background.paper};
    border-radius: 10px;
    ${space};
    ${layout};
    ${border}
`

export interface ProductCardProps {
    product: {
        name: string
        picture: string
        link: string
        price?: number
    }
}

interface ProductCardWrapperProps extends ProductCardProps {
    direction: 'horizontal' | 'vertical'
}

const ProductCard: React.FC<ProductCardWrapperProps> = ({
    direction,
    ...props
}) => {
    if (direction === 'horizontal') return <HorizontalCard {...props} />
    return <VerticalCard {...props} />
}

export default ProductCard
