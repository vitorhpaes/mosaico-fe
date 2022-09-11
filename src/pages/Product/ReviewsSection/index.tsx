import React from 'react'

import SectionContainer from '@components/SectionContainer'
import SectionTitle from '@components/SectionTitle'

import { NormalizedReview } from '@services/normalizers/products'
import styled from 'styled-components'
import { Avatar, Rating, Spacing, Typography } from '@ds'
import { dateFromNow } from '@helpers/date'
import { randomizeInt } from './../../../helpers/randomize'

interface ReviewsSectionProps {
    reviews: {
        data: NormalizedReview[]
        count: number
    }
}

const StyledReviewSectionContainer = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.applySpace('large')};
`

const StyledReviewCard = styled.div`
    display: flex;
    width: 100%;
    gap: ${({ theme }) => theme.applySpace('medium')};
`
const StyledReviewCardContent = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;

    .name-and-time {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`

const StyledReviewPictureCard = styled.div`
    border: 1px solid ${({ theme }) => theme.palette.grey.main};
    border-radius: ${({ theme }) => theme.applySpace('medium')};
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${({ theme }) => theme.applySpace('huge')};
    height: ${({ theme }) => theme.applySpace('huge')};

    overflow: hidden;

    img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
    }
`

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
    return (
        <StyledReviewSectionContainer color="paper" padding={0} mt="standard">
            <SectionTitle title={`Review (${reviews.count})`} />
            {reviews.data.map((review) => (
                <StyledReviewCard>
                    <div>
                        <Avatar src={review.avatar} size="largeXX" />
                    </div>
                    <StyledReviewCardContent>
                        <div className="name-and-time">
                            <Typography variant="subtitle">
                                {review.consumer}
                            </Typography>
                            <Typography variant="caption">
                                {dateFromNow(review.date)}
                            </Typography>
                        </div>
                        <Rating value={review.rating} />
                        <Spacing mt="standard">
                            <Typography variant="body1">
                                {review.review}
                            </Typography>
                        </Spacing>
                        {review.images && (
                            <Spacing mt="standard">
                                {review.images.map((image) => (
                                    <Spacing mr="standard">
                                        <StyledReviewPictureCard>
                                            <img src={image} />
                                        </StyledReviewPictureCard>
                                    </Spacing>
                                ))}
                            </Spacing>
                        )}
                    </StyledReviewCardContent>
                </StyledReviewCard>
            ))}
        </StyledReviewSectionContainer>
    )
}

export default ReviewsSection
