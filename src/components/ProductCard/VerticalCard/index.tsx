import React from 'react'
import styled from 'styled-components'

import { Spacing, Typography } from '@ds'

import { ProductCardProps, StyledCard } from './../index'
import { useNavigate } from 'react-router-dom'

const StyledCardRowColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`

const StyledProductImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img {
        margin-left: auto;
        margin-right: auto;
        max-height: 125px;
        max-width: 125px;
        width: auto;
        height: auto;
    }
`

const StyledTextContent = styled(Spacing)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const VerticalCard: React.FC<ProductCardProps> = ({ product }) => {
    const navigate = useNavigate()
    const redirectToProductPage = () => navigate(product.link)

    return (
        <StyledCard
            px="medium"
            py="standard"
            width={'155px'}
            height={'100%'}
            borderRadius={15}
            onClick={redirectToProductPage}
        >
            <StyledCardRowColumn>
                <StyledProductImageWrapper>
                    <img src={product.picture} />
                </StyledProductImageWrapper>
                <StyledTextContent mt="standard">
                    <Typography variant="body1">{product.name}</Typography>
                    <Typography variant="body2">
                        USD {product?.price}
                    </Typography>
                </StyledTextContent>
            </StyledCardRowColumn>
        </StyledCard>
    )
}

export default VerticalCard
export { default as VerticalSkeleton } from './Skeleton'
