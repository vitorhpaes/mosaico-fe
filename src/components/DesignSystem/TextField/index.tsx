import React from 'react'
import styled from 'styled-components'
import Spacing from '../Spacing'

const StyledTextField = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    border: ${({ theme }) => `1px solid ${theme.palette.grey.main}`};
    border-radius: ${({ theme }) => theme.applySpace('small')};

    padding-top: ${({ theme }) => theme.applySpace('medium')};
    padding-bottom: ${({ theme }) => theme.applySpace('medium')};
    padding-left: ${({ theme }) => theme.applySpace('standard')};
    padding-right: ${({ theme }) => theme.applySpace('standard')};
`

const StyledInput = styled.input`
    font-size: ${({ theme }) => theme.typography.body1.size};
`

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    before: React.ReactNode
    after: React.ReactNode
}

const TextField: React.FC<TextFieldProps> = ({ before, after, ...props }) => {
    return (
        <StyledTextField>
            {!!before && before}
            <StyledInput {...props} />
            {!!after && after}
        </StyledTextField>
    )
}

export default TextField
