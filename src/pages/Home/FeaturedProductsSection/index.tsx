import React from 'react'
import { Spacing } from '@ds'
import SectionTitle from '@components/SectionTitle'
import ProductCard from '@components/ProductCard'
import images from '@images/urls.json'

import { useFeaturedProducts } from '@services/queries/products'

const FeaturedProductsSection: React.FC = () => {
    const {
        data: products,
        isLoading: isLoadingProducts,
        isSuccess: isSuccessProducts,
    } = useFeaturedProducts()

    return (
        <>
            <SectionTitle
                title="Featured Products"
                redirect={{
                    text: 'See All',
                    target: 'products',
                }}
            />

            <Spacing my="large">
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
            </Spacing>
        </>
    )
}

export default FeaturedProductsSection
