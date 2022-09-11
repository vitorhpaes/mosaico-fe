import React from 'react'
import { WithLoading } from '@app/@types/snippets'
import styled from 'styled-components'
import {
    space,
    SpaceProps,
    layout,
    LayoutProps,
    border,
    BorderProps,
} from 'styled-system'
import HorizontalCard, { HorizontalSkeleton } from './HorizontalCard'
import VerticalCard, { VerticalSkeleton } from './VerticalCard'

export const StyledCard = styled.div<SpaceProps | LayoutProps | BorderProps>`
    background-color: ${({ theme }) => theme.palette.background.paper};
    border-radius: 10px;
    ${space};
    ${layout};
    ${border};
`

export interface ProductCardProps {
    product?: {
        name: string
        picture: string
        link: string
        price?: string
    }
}

type ProductCardWrapperProps = {
    direction: 'horizontal' | 'vertical'
} & ProductCardProps

type ProductCardWrapperWithLoading = WithLoading<ProductCardWrapperProps>

const ProductCard: React.FC<ProductCardWrapperWithLoading> = ({
    direction,
    loading = false,
    ...props
}) => {
    if (loading) {
        if (direction === 'vertical') return <VerticalSkeleton />
        if (direction === 'horizontal') return <HorizontalSkeleton />
    } else {
        if (direction === 'horizontal') return <HorizontalCard {...props} />
        if (direction === 'vertical') return <VerticalCard {...props} />
    }
}

export default ProductCard
