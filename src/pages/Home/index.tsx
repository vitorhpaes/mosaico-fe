import React, { useState, useEffect } from 'react'

import withLayoutConfig from '../withLayoutConfig'
import { Chip, ChipRow, Spacing, Typography } from '@ds'

import PageContainer from '@components/Layout/PageContainer'
import SearchInput from '@components/SearchInput'
import SectionContainer from '@components/SectionContainer'
import ProductCard from '@app/components/ProductCard'
import images from '@images/urls.json'
import SectionTitle from '@components/SectionTitle'
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
                    <Chip label="Headphone" />
                    <Chip label="Headband" disabled />
                    <Chip label="Earpads" disabled />
                    <Chip label="Cable" disabled />
                </ChipRow>

                <SectionTitle
                    title="Featured Products"
                    redirect={{
                        text: 'See All',
                        target: 'products',
                    }}
                />

                    <ProductCard
                        product={{
                            name: 'TMA-2 Modular Headphone',
                            link: 'https://google.com',
                            picture: images.headphone,
                        }}
                    />
                </Spacing>
            </SectionContainer>
        </>
    )
}

export default withLayoutConfig(<Home />)
