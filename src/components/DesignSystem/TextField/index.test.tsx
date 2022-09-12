import React from 'react'
import { render, screen } from '@testing-library/react'
import TextField from './index'

import { TestElementWrapper } from '@app/helpers/test-helper'

interface DefaultComponent {
    before?: React.ReactNode
    after?: React.ReactNode
    value?: string
}

describe('Text Field component', () => {
    const DefaultComponent: React.FC<DefaultComponent> = ({
        before,
        after,
        value,
    }) => (
        <TestElementWrapper>
            <TextField value={value} before={before} after={after} />
        </TestElementWrapper>
    )

    test('should display the before component if it exists', () => {
        render(<DefaultComponent before={<h1>test before</h1>} value={'test'} />)

        const beforeElement = screen.getByRole('heading', { name: 'test before' })

        expect(beforeElement).toBeInTheDocument()
    })

    test('should display the after component if it exists', () => {
        render(
            <DefaultComponent after={<h1>test after</h1>} value={'test'} />
        )

        const afterElement = screen.getByRole('heading', {
            name: 'test after',
        })

        expect(afterElement).toBeInTheDocument()
    })
})
