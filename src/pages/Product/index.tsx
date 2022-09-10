import React from 'react'
import { useParams } from 'react-router-dom'
import withLayoutConfig from '../withLayoutConfig'

import PageContainer from '@app/components/Layout/PageContainer'
import { Typography } from '@ds'
import { useProduct } from '@app/services/queries/products'

const Product: React.FC = () => {
    const { productId } = useParams()

    const {
        data: product,
        isLoading: isLoadingProduct,
        isSuccess: isSuccessProduct,
    } = useProduct(productId)

    if (isLoadingProduct) return <>Loading...</>

    return (
        <PageContainer>
            <Typography color="main" variant="subtitle" weight={700}>
                USD {product.price}
            </Typography>
            <Typography variant="title" family="Montserrat">
                {product.title}
            </Typography>
        </PageContainer>
    )
}

export default withLayoutConfig(<Product />)
