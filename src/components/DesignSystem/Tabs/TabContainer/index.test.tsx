import React from 'react'
import { render, screen } from '@testing-library/react'
import TabContainer from './index'

describe('Tab Container component', () => {

    test('should not display children while active is false', () => {
        render(<TabContainer active={false}>children</TabContainer>)

        const childrenElement = screen.queryByText('children');
        expect(childrenElement).not.toBeInTheDocument();
    })

    test('should display children if active is true', () => {
        render(<TabContainer active={true}>children</TabContainer>)

        const childrenElement = screen.queryByText('children')
        expect(childrenElement).toBeInTheDocument()
    })
})
