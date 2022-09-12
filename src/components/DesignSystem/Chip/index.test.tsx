import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Chip from './index'

import { TestElementWrapper } from '@app/helpers/test-helper'
import theme from '@app/assets/styles/theme'

import '@testing-library/jest-dom'

interface DefaultComponent {
    disabled?: boolean
}

describe('Chip Component', () => {
    const mockedClick = jest.fn()
    const mockedTitle = 'chip test'

    const DefaultComponent: React.FC<DefaultComponent> = ({ disabled }) => (
        <TestElementWrapper>
            <Chip
                disabled={disabled}
                label={mockedTitle}
                onClick={mockedClick}
                color="main"
            />
        </TestElementWrapper>
    )

    test('should show chip title', () => {
        render(<DefaultComponent />)

        expect(screen.findByText(mockedTitle))
    })

    test('should run onClick function', () => {
        render(<DefaultComponent />)

        const chipComponent = screen.getByText(mockedTitle)

        userEvent.click(chipComponent)
        expect(mockedClick).toBeCalledTimes(1)
    })

    test('should not show background while disabled', () => {
        render(<DefaultComponent disabled />)

        expect(screen.getByText(mockedTitle)).toHaveStyle(
            `background-color: none`
        )
        expect(screen.getByText(mockedTitle)).toHaveStyle(`color: inherit`)
    })

    test('should show background if it is enabled', () => {
        render(<DefaultComponent />)

        const chipElement = screen.getByRole('heading', { name: 'chip test' })
        expect(chipElement).toHaveStyle(`color: inherit`)
        const parent = chipElement.parentElement
        expect(parent).toHaveStyle(
            `background-color: ${theme.palette.main.index}`
        )
    })
})
