import React from 'react'
import styled, {
    DefaultTheme,
    PaletteKey,
    TypographyKey,
    useTheme,
} from 'styled-components'

interface StyledTypographyProps {
    color?: PaletteKey | 'inherit'
    size?: number
    weight?: number
    transform?: 'uppercase' | 'lowercase' | 'none'
    family?: 'DM Sans' | 'Montserrat'
    variant?: TypographyKey
}

interface TypographyProps extends StyledTypographyProps {
    tag?: undefined
    children: React.ReactNode
}

type TypographyPropsKey = keyof StyledTypographyProps

const getStyleProp = (
    cssProp: TypographyPropsKey,
    theme: DefaultTheme,
    variant: TypographyKey,
    finalProp: string | number
) => {
    if (finalProp) return finalProp

    if (variant) return theme.typography[variant][cssProp]

    return theme.typography.default[cssProp]
}

const getColorProp = (
    theme: DefaultTheme,
    color: PaletteKey | 'inherit',
    variant?: TypographyKey
) => {
    if (color === 'inherit') return 'inherit'
    if (color) return theme.palette[color].index
    if (variant) return theme.typography[variant].color
    return theme.typography.default.color
}

const CreateStyledTypography = (tag: any) => styled(tag)<StyledTypographyProps>`
    margin-top: 0;
    margin-bottom: 0;

    font-family: ${({ family }) => family};

    color: ${({ theme, variant, color }) =>
        getColorProp(theme, color, variant)};

    font-weight: ${({ theme, variant, weight }) =>
        getStyleProp('weight', theme, variant, weight)};

    font-size: ${({ theme, variant, size }) =>
        getStyleProp('size', theme, variant, size)}px;

    text-transform: ${({ theme, variant, transform }) =>
        getStyleProp('transform', theme, variant, transform)};
`

const Typography: React.FC<TypographyProps> = ({
    tag,
    children,
    family = 'DM Sans',
    ...props
}) => {
    const theme = useTheme()
    const variant = props.variant

    const fontFamily = `'${family}', sans-serif`

    const htmlFinalTag = tag
        ? tag
        : !!variant
        ? theme.typography[variant].tag
        : 'span'

    const StyledTypography = CreateStyledTypography(htmlFinalTag)

    return (
        <StyledTypography {...props} family={fontFamily}>
            {children}
        </StyledTypography>
    )
}

export default Typography
