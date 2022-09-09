import React from 'react'
import withLayoutConfig from '../withLayoutConfig'
import { Spacing, TextField, TextFieldIconWrapper, Typography } from '@ds'

import { FiSearch } from 'react-icons/fi'

import PageContainer from '@components/Layout/PageContainer'
import SearchInput from '@app/components/SearchInput'

const Home: React.FC = () => {
    return (
        <PageContainer>
            <Typography variant="subtitle">Hi, Andrea</Typography>
            <Typography variant="title" size={24} transform={'none'}>
                What are you looking for today?
            </Typography>
            <Spacing my="large">
                <SearchInput />
            </Spacing>
        </PageContainer>
    )
}

export default withLayoutConfig(<Home />)
