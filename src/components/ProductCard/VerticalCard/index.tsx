import React from 'react'
import styled from 'styled-components'

import { Typography } from '@ds'

import { ProductCardProps, StyledCard } from './../index'

const StyledCardRowColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const StyledProductImageWrapper = styled.div`
    width: 100%;
    height: auto;

    img {
        width: 100%;
        height: auto;
    }
`

const StyledTextContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const VerticalCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <StyledCard px="medium" py="standard" width={'155px'} borderRadius={15}>
            <StyledCardRowColumn>
                <StyledProductImageWrapper>
                    <img src={product.picture} />
                </StyledProductImageWrapper>
                <StyledTextContent>
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
