import React from 'react'
import styled from 'styled-components'

import { Link, Spacing, Typography } from '@ds'
import { FiArrowRight } from 'react-icons/fi'

import { ProductCardProps, StyledCard } from './../index'

const StyledCardRow = styled.div`
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`

const StyledProductImageWrapper = styled.div`
    max-width: 40%;
    max-height: 135px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
`

const StyledTextContent = styled(Spacing)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 60%;
`

const HorizontalCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <StyledCard px="large" py={20} width={'320px'}>
            <StyledCardRow>
                <StyledTextContent pr="small">
                    <Typography
                        variant="title"
                        size={22}
                        family="Montserrat"
                        transform="none"
                    >
                        {product.name}
                    </Typography>
                    <Typography variant="body1" weight={700} color={'main'}>
                        <Link to={product.link}>
                            Shop now
                            <Spacing ml="medium" alignItems={'center'}>
                                <FiArrowRight size={18} />
                            </Spacing>
                        </Link>
                    </Typography>
                </StyledTextContent>
                <StyledProductImageWrapper>
                    <img src={product.picture} />
                </StyledProductImageWrapper>
            </StyledCardRow>
        </StyledCard>
    )
}

export { default as Skeleton } from './Skeleton'
export default HorizontalCard
