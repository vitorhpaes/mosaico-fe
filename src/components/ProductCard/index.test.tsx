import React from 'react'
import { render, screen } from '@testing-library/react'

import ProductCard, {
    ProductCardWrapperWithLoading,
} from './index'

import { TestElementWrapper } from '@app/helpers/test-helper'

describe('Product Card Component', () => {
    const mockedProduct = {
        price: '250',
        name: 'mocked product',
        picture: '',
        link: '/product/10',
    }

    const DefaultComponent: React.FC<ProductCardWrapperWithLoading> = ({
        ...props
    }) => (
        <TestElementWrapper>
            <ProductCard {...props} />
        </TestElementWrapper>
    )

    test('should render the vertical card if direction is vertical', () => {
        render(
            <DefaultComponent
                loading={false}
                direction="vertical"
                product={mockedProduct}
            />
        )

        expect(
            screen.getByText(`USD ${mockedProduct.price}`)
        ).toBeInTheDocument()
    })

    test('should render the horizontal card if direction is horizontal', () => {
        render(
            <DefaultComponent
                loading={false}
                direction="horizontal"
                product={mockedProduct}
            />
        )

        expect(
            screen.queryByText(`USD ${mockedProduct.price}`)
        ).not.toBeInTheDocument()
    })

    test('should not render product props while loading', () => {
        render(
            <DefaultComponent
                loading
                direction="vertical"
                product={mockedProduct}
            />
        )

        expect(screen.queryByText(mockedProduct.name)).not.toBeInTheDocument()
        expect(screen.queryByText(mockedProduct.price)).not.toBeInTheDocument()
    })
})
