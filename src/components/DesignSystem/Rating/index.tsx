import React from 'react'

import { IoIosStar, IoIosStarOutline } from 'react-icons/io'
import styled, { useTheme } from 'styled-components'

interface RatingProps {
    value: number
}

const RatingRow = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.applySpace('small')};
`

const Rating: React.FC<RatingProps> = ({ value }) => {
    const theme = useTheme()
    const stars = []
    for (let i = 0; i < 5; i++) {
        const isFilled = value > i
        stars.push(
            isFilled ? (
                <IoIosStar color={theme.palette.accent.main} data-testid="star-filled"/>
            ) : (
                <IoIosStarOutline color={theme.palette.grey.main} data-testid="star-outlined"/>
            )
        )
    }

    return <RatingRow>{stars}</RatingRow>
}

export default Rating
