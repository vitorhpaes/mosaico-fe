import React, { useState, useEffect } from 'react'

import withLayoutConfig from '../withLayoutConfig'
import { Chip, ChipRow, Spacing, Typography } from '@ds'

import PageContainer from '@components/Layout/PageContainer'
import SearchInput from '@components/SearchInput'
import SectionContainer from '@components/SectionContainer'
import ProductCard from '@app/components/ProductCard'
import images from '@images/urls.json'
import SectionTitle from '@components/SectionTitle'
import CategoryProductsSection from './CategoryProductsSection'

import { useCategories } from '@services/queries/categories'

const Home: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>()

    const {
        data: categories,
        isLoading: isLoadingCategories,
        isSuccess: isSuccessCategories,
    } = useCategories()

    useEffect(() => {
        if (selectedCategory || !categories || !categories.length) return
        const firstCategory = categories[0]
        setSelectedCategory(firstCategory)
    }, [categories])

    return (
        <>
            <PageContainer>
                <Typography variant="subtitle">Hi, Andrea</Typography>
                <Typography variant="title" size={24} transform={'none'}>
                    What are you looking for today?
                </Typography>
                <Spacing my="large">
                    <SearchInput />
                </Spacing>
            </PageContainer>
            <SectionContainer pr="0" height="100%">
                <ChipRow>
                    {isSuccessCategories &&
                        categories?.length &&
                        categories.map((category) => (
                            <Chip
                                key={category}
                                label={category}
                                disabled={category !== selectedCategory}
                            />
                        ))}
                </ChipRow>

                <CategoryProductsSection category={selectedCategory} />

                <SectionTitle
                    title="Featured Products"
                    redirect={{
                        text: 'See All',
                        target: 'products',
                    }}
                />

                <Spacing my="large">
                    <Spacing mr="standard">
                        <ProductCard
                            direction="vertical"
                            product={{
                                name: 'TMA-2 HD Wireless',
                                link: 'https://google.com',
                                picture: images.headphone,
                                price: 350,
                            }}
                        />
                    </Spacing>
                    <Spacing mr="standard">
                        <ProductCard
                            direction="vertical"
                            product={{
                                name: 'TMA-2 HD Wireless',
                                link: 'https://google.com',
                                picture: images.headphone,
                                price: 25,
                            }}
                        />
                    </Spacing>
                    <Spacing mr="standard">
                        <ProductCard
                            direction="vertical"
                            product={{
                                name: 'TMA-2 HD Wireless',
                                link: 'https://google.com',
                                picture: images.headphone,
                                price: 125,
                            }}
                        />
                    </Spacing>
                </Spacing>
            </SectionContainer>
        </>
    )
}

export default withLayoutConfig(<Home />)
