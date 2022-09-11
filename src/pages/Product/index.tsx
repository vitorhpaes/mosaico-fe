import React, { useState, useMemo } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import withLayoutConfig from '../withLayoutConfig'

import PageContainer from '@components/Layout/PageContainer'
import { Button, Loader, Spacing, TabMenu, TabMenuItem, Typography } from '@ds'

import { useProduct } from '@services/queries/products'
import { TabContainer } from '@components/DesignSystem/Tabs'
import SectionContainer from '@components/SectionContainer'
import ProductsSmallSection from '@components/ProductsSmallSection'
import ImagesSection from './ImagesSection'
import ReviewsSection from './ReviewsSection'

const StyledButtonSection = styled(SectionContainer)`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
`

const Product: React.FC = () => {
    const { productId } = useParams()
    const [activeTab, setActiveTab] = useState(0)

    const {
        data: product,
        isLoading: isLoadingProduct,
        isSuccess: isSuccessProduct,
    } = useProduct(productId)

    const tabs = useMemo(
        () => [
            {
                index: 0,
                title: 'Overview',
                active: activeTab === 0,
                onClick: () => setActiveTab(0),
            },
            {
                index: 1,
                title: 'Features',
                active: activeTab === 1,
                onClick: () => setActiveTab(1),
            },
            {
                index: 2,
                title: 'Specification',
                active: activeTab === 2,
                onClick: () => setActiveTab(2),
            },
        ],
        [activeTab]
    )

    if (isLoadingProduct) return <Loader />

    return (
        <>
            <PageContainer>
                <Typography color="main" variant="subtitle" weight={700}>
                    USD {product.price}
                </Typography>
                <Typography variant="title" family="Montserrat">
                    {product.title}
                </Typography>
                <Spacing mt="largeX" flexDirection={'column'}>
                    <TabMenu>
                        {tabs.map((tab) => (
                            <TabMenuItem
                                title={tab.title}
                                active={tab.active}
                                key={tab.index}
                                onClick={tab.onClick}
                            />
                        ))}
                    </TabMenu>
                    <TabContainer active={tabs[0].active}>
                        <ImagesSection images={product.images} />
                        <ReviewsSection reviews={product?.reviews} />
                    </TabContainer>
                    <TabContainer active={tabs[1].active}>
                        mocked tab 2
                    </TabContainer>
                    <TabContainer active={tabs[2].active}>
                        mocked tab 3
                    </TabContainer>
                </Spacing>
            </PageContainer>

            <SectionContainer
                color="default"
                borderRadius={0}
                marginBottom={'hugeXX'}
            >
                <ProductsSmallSection title="Another Products" />
            </SectionContainer>

            <StyledButtonSection color="paper" borderRadius={0} padding={0}>
                <Spacing py="largeX" px="large">
                    <Button fullWidth color="main">
                        <Typography weight={700} color="inherit">
                            Add to cart
                        </Typography>
                    </Button>
                </Spacing>
            </StyledButtonSection>
        </>
    )
}

export default withLayoutConfig(<Product />)
