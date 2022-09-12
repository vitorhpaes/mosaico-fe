import React from 'react'
import { render, screen } from '@testing-library/react'
import TabMenuItem from './index'

import { TestElementWrapper } from '@app/helpers/test-helper'

describe('Tab Menu Item component', () => {
    test('should display tab menu item title', () => {
        render(
            <TestElementWrapper>
                <TabMenuItem active={false} title="mocked tab" />
            </TestElementWrapper>
        )

        const tabMenuItemElement = screen.getByRole('heading', { name: 'mocked tab' })
        expect(tabMenuItemElement).toBeInTheDocument()
    })

    test('should not display separator while active is false', () => {
        render(
            <TestElementWrapper>
                <TabMenuItem active={false} title="mocked tab" />
            </TestElementWrapper>
        )

        const separatorElement = screen.queryByRole('separator')
        expect(separatorElement).not.toBeInTheDocument()
    })

    test('should display separator if active is true', () => {
        render(
            <TestElementWrapper>
                <TabMenuItem active={true} title="mocked tab" />
            </TestElementWrapper>
        )

        const separatorElement = screen.queryByRole('separator')
        expect(separatorElement).toBeInTheDocument()
    })
})
