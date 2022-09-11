import React from 'react'

import SectionContainer from '@components/SectionContainer'
import SectionTitle from '@components/SectionTitle'

import { NormalizedReview } from '@services/normalizers/products'
import styled from 'styled-components'
import { Avatar, Typography } from '@ds'
import { dateFromNow } from '@helpers/date'

interface ReviewsSectionProps {
    reviews: {
        data: NormalizedReview[]
        count: number
    }
}

const StyledReviewSectionContainer = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.applySpace('standard')};
`

const StyledReviewCard = styled.div`
    display: flex;
    flex-direction: column;
`
const StyledReviewCardHeader = styled.div`
    display: flex;

    .name-and-time {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
    console.log({ reviews })
    return (
        <StyledReviewSectionContainer color="paper" padding={0} mt="standard">
            <SectionTitle title={`Review (${reviews.count})`} />
            {reviews.data.map((review) => (
                <StyledReviewCard>
                    <StyledReviewCardHeader>
                        <Avatar src={review.avatar} size="largeXX" />
                        <div className="name-and-time">
                            <Typography variant="subtitle">
                                {review.consumer}
                            </Typography>
                            <Typography variant="caption">
                                {dateFromNow(review.date)}
                            </Typography>
                        </div>
                    </StyledReviewCardHeader>
                </StyledReviewCard>
            ))}
        </StyledReviewSectionContainer>
    )
}

export default ReviewsSection
