import React from 'react'
import { Spacing } from '@ds'
import SectionTitle from '@components/SectionTitle'
import ProductCard from '@components/ProductCard'

import { useFeaturedProducts } from '@services/queries/products'
import styled from 'styled-components'
import SkeletonContainer from '../SkeletonContainer'

interface ProductsSmallSectionProps {
    title: string
}

const StyledCardRow = styled.div`
    max-width: 100%;
    overflow-x: auto;
    display: flex;
`

const ProductsSmallSection: React.FC<ProductsSmallSectionProps> = ({
    title,
}) => {
    const {
        data: products,
        isLoading: isLoadingProducts,
        isSuccess: isSuccessProducts,
    } = useFeaturedProducts()

    return (
        <>
            <SectionTitle
                title={title}
                redirect={{
                    text: 'See All',
                    target: 'products',
                }}
            />

            <Spacing my="large">
                <StyledCardRow>
                    {isLoadingProducts && (
                        <SkeletonContainer repeat={3}>
                            <Spacing mr="standard">
                                <ProductCard direction="vertical" loading />
                            </Spacing>
                        </SkeletonContainer>
                    )}

                    {isSuccessProducts &&
                        products?.map((product) => (
                            <Spacing mr="standard" key={product.id}>
                                <ProductCard
                                    direction="vertical"
                                    product={{
                                        name: product.minifiedTitle,
                                        link: product.url,
                                        picture: product.image,
                                        price: product.price,
                                    }}
                                />
                            </Spacing>
                        ))}
                </StyledCardRow>
            </Spacing>
        </>
    )
}

export default ProductsSmallSection
