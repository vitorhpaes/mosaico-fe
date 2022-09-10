import React from 'react'
import styled from 'styled-components'
import { Spacing } from '@ds'

interface ImagesSectionProps {
    images: string[]
}

const StyledCardRow = styled.div`
    max-width: 100%;
    overflow-x: auto;
    display: flex;
`

const StyledImageCard = styled.div`
    width: 285px;
    height: 390px;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.palette.background.default};
    border-radius: ${({theme}) => theme.applySpace('medium')};

    img {
        width: auto;
        height: auto;
        max-width: 285px;
        max-height: 390px;
    }
`

const ImagesSection: React.FC<ImagesSectionProps> = ({ images }) => {
    return (
        <StyledCardRow>
            {images.map((image, index) => (
                <Spacing mr="small" key={index}>
                    <StyledImageCard>
                        <img src={image} />
                    </StyledImageCard>
                </Spacing>
            ))}
        </StyledCardRow>
    )
}

export default ImagesSection
