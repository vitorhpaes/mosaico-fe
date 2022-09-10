import React from 'react'
import styled from 'styled-components'

import { Spacing, Typography } from '@ds'

import { ProductCardProps, StyledCard } from './../index'

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

    img {
        margin-left: auto;
        margin-right: auto;
        max-height: 125px;
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
    return (
        <StyledCard px="medium" py="standard" width={'155px'} height={'fit-content'} borderRadius={15}>
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
