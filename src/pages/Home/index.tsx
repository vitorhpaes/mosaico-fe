import React from 'react'
import withLayoutConfig from '../withLayoutConfig'
import { Chip, ChipRow, Spacing, Typography } from '@ds'

import PageContainer from '@components/Layout/PageContainer'
import SearchInput from '@components/SearchInput'
import SectionContainer from '@components/SectionContainer'

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
            </SectionContainer>
        </>
    )
}

export default withLayoutConfig(<Home />)
