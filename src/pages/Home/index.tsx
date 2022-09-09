import React from 'react'
import withLayoutConfig from '../withLayoutConfig'
import { Typography } from '@ds'

import PageContainer from '@components/Layout/PageContainer'

const Home: React.FC = () => {
    return (
        <PageContainer>
            <Typography variant="subtitle">Hi, Andrea</Typography>
            <Typography variant="title" size={24} transform={'none'}>
                What are you looking for today?
            </Typography>
        </PageContainer>
    )
}

export default withLayoutConfig(<Home />)
