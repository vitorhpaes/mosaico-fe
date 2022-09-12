import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Rating from './index'

import { TestElementWrapper } from '@app/helpers/test-helper'
import theme from '@app/assets/styles/theme'
import 'jest-styled-components'
import '@testing-library/jest-dom/'

interface DefaultComponent {
    value?: number
}

describe('Rating component', () => {
    const DefaultComponent: React.FC<DefaultComponent> = ({ value }) => (
        <TestElementWrapper>
            <Rating value={value} />
        </TestElementWrapper>
    )

    test('should display the correct rating value', () => {
        render(<DefaultComponent value={3} />)

        const nonFilledStars = screen.getAllByTestId('star-outlined')
        const filledStars = screen.getAllByTestId('star-filled')

        expect(filledStars).toHaveLength(3)
        expect(nonFilledStars).toHaveLength(2)
    })
})
