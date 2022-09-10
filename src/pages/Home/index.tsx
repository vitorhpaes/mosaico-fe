import React from 'react'
import withLayoutConfig from '../withLayoutConfig'
import { Chip, ChipRow, Spacing, Typography } from '@ds'

import PageContainer from '@components/Layout/PageContainer'
import SearchInput from '@components/SearchInput'
import SectionContainer from '@components/SectionContainer'
import { ProductCard } from '@app/components/ProductCard'
import images from '@images/urls.json'

const Home: React.FC = () => {
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

                <Spacing my={'large'}>
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
