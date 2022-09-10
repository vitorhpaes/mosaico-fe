import styled, { PaletteKey } from 'styled-components'
import { size, SizeProps, space, SpaceProps } from 'styled-system'

interface ButtonProps {
    color?: PaletteKey
    fullWidth?: boolean
}

const Button = styled.div<(SizeProps | SpaceProps) & ButtonProps>`
    padding: ${({ theme }) => theme.applySpace('standard')};
    border-radius: ${({ theme }) => theme.applySpace('small')};
    background-color: ${({ theme, color }) =>
        theme.palette[color ? color : 'main'].index};
    color: ${({ theme, color }) =>
        ['main', 'accent', undefined].includes(color)
            ? theme.palette.font.reverse
            : theme.palette.font.main};

    text-align: center;

    ${({ fullWidth }) => fullWidth && `width: 100%;`}

    ${size};
    ${space};
`

export default Button
