import React from 'react'
import { render, screen } from '@testing-library/react'

import { TestElementWrapper } from '@app/helpers/test-helper'
import Typography from './index'
import { PaletteKey, TypographyKey } from 'styled-components'

import '@testing-library/jest-dom'
import theme from '@app/assets/styles/theme'

interface DefaultComponent {
    color?: PaletteKey | 'inherit'
    size?: number
    weight?: number
    transform?: 'uppercase' | 'lowercase' | 'none'
    family?: 'DM Sans' | 'Montserrat'
    variant?: TypographyKey
}

describe('Typography component', () => {
    const mockedText = 'Text test mocked'

    const DefaultComponent: React.FC<DefaultComponent> = ({ ...props }) => (
        <TestElementWrapper>
            <Typography {...props}>{mockedText}</Typography>
        </TestElementWrapper>
    )

    test('should show correct font-family', () => {
        render(<DefaultComponent family={'Montserrat'} />)

        const typographyElement = screen.getByText(mockedText)
        expect(typographyElement).toHaveStyle(
            "font-family: 'Montserrat',sans-serif"
        )
    })

    test('should show correct font color', () => {
        render(<DefaultComponent color={'grey'} />)

        const typographyElement = screen.getByText(mockedText)
        expect(typographyElement).toHaveStyle(
            `color: ${theme.palette.grey.index}`
        )
    })

    test('should show correct font weight', () => {
        render(<DefaultComponent weight={700} />)

        const typographyElement = screen.getByText(mockedText)
        expect(typographyElement).toHaveStyle(`font-weight: 700`)
    })

    test('should show correct font size', () => {
        render(<DefaultComponent size={20} />)

        const typographyElement = screen.getByText(mockedText)
        expect(typographyElement).toHaveStyle(`font-size: 20px`)
    })

    test('should show correct text transform', () => {
        render(<DefaultComponent transform="uppercase" />)

        const typographyElement = screen.getByText(mockedText)
        expect(typographyElement).toHaveStyle(`text-transform: uppercase`)
    })

    test('should display the correct variant properties', () => {
        render(<DefaultComponent variant="title" />)

        const typographyElement = screen.getByText(mockedText)
        expect(typographyElement).toHaveStyle(
            `font-size: ${theme.typography.title.size}px`
        )
        expect(typographyElement).toHaveStyle(
            `color: ${theme.typography.title.color}`
        )
        expect(typographyElement).toHaveStyle(
            `font-weight: ${theme.typography.title.weight}`
        )
    })

    test('should override variant properties with passed props', () => {
        render(<DefaultComponent variant="title" color='main' size={20} weight={500} />)

        const typographyElement = screen.getByText(mockedText)
        expect(typographyElement).toHaveStyle(
            `color: ${theme.palette.main.index}`
        )

        expect(typographyElement).toHaveStyle(
            `font-size: 20px`
        )

        expect(typographyElement).toHaveStyle(`font-weight: 500`)
    })
})
