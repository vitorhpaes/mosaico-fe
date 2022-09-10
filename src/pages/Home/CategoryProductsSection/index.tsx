import React from 'react'
import { Spacing } from '@ds'
import ProductCard from '@components/ProductCard'
import styled from 'styled-components'

import { useCategoryProducts } from '@services/queries/categories'

interface CategoryProductsSectionProps {
    category?: string
}

const StyledCardRow = styled.div`
    max-width: 100%;
    overflow-x: auto;
    display: flex;
`

const CategoryProductsSection: React.FC<CategoryProductsSectionProps> = ({
    category,
}) => {
    const {
        data: products,
        isSuccess: isSuccessProducts,
        isLoading: isLoadingProducts,
    } = useCategoryProducts(category)

    return (
        <Spacing my={'large'}>
            <StyledCardRow>
                {isSuccessProducts &&
                    products?.map((product) => (
                        <Spacing mr="small" key={product.id}>
                            <ProductCard
                                direction="horizontal"
                                product={{
                                    name: product.title.split(' ')[0],
                                    link: product.title,
                                    picture: product.image,
                                }}
                            />
                        </Spacing>
                    ))}
            </StyledCardRow>
        </Spacing>
    )
}

export default CategoryProductsSection
