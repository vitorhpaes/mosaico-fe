import React from 'react'
import styled, { PaletteKey, SpacingKey, useTheme } from 'styled-components'
import Typography from '../Typography'

interface StyledChipProps {
    color?: PaletteKey
    fontColor?: string
    spacingY: SpacingKey
    spacingX: SpacingKey
    disabled: boolean
}

interface ChipProps {
    size?: 'sm' | 'md' | 'lg'
    color?: PaletteKey
    label?: string
    disabled?: boolean
    children?: React.ReactNode
}

const StyledChip = styled.div<StyledChipProps>`
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-around;

    color: ${({ theme, fontColor, disabled }) => !disabled ? fontColor : theme.palette.font.secondary};

    border-radius: 30px;

    background-color: ${({ theme, color, disabled }) =>
        !disabled ? theme.palette[color].index : 'none'};
    padding-left: ${({ theme, spacingX }) => theme.applySpace(spacingX)};
    padding-right: ${({ theme, spacingX }) => theme.applySpace(spacingX)};
    padding-top: ${({ theme, spacingY }) => theme.applySpace(spacingY)};
    padding-bottom: ${({ theme, spacingY }) => theme.applySpace(spacingY)};
`

interface SpacingMapChild {
    Y: SpacingKey
    X: SpacingKey
}

interface SpacingMapProps {
    sm: SpacingMapChild
    md: SpacingMapChild
    lg: SpacingMapChild
}

const spacingMap: SpacingMapProps = {
    sm: {
        Y: 'nano',
        X: 'micro',
    },
    md: {
        Y: 'micro',
        X: 'medium',
    },
    lg: {
        Y: 'small',
        X: 'medium',
    },
}

const Chip: React.FC<ChipProps> = ({
    children,
    size = 'md',
    color = 'main',
    disabled = false,
    label,
}) => {
    const { X: spacingX, Y: spacingY } = spacingMap[size]
    const theme = useTheme()

    const fontColor = ['main', 'accent'].includes(color)
        ? theme.palette.font.reverse
        : theme.palette.font.index

    return (
        <StyledChip
            spacingX={spacingX}
            spacingY={spacingY}
            disabled={disabled}
            color={color}
            fontColor={fontColor}
        >
            {!!children && !label && children}
            {label && (
                <Typography variant="body1" color={'inherit'}>
                    {label}
                </Typography>
            )}
        </StyledChip>
    )
}

export { default as ChipRow } from './ChipRow'
export default Chip