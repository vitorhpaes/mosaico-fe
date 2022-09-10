import 'styled-components'
import theme from '@app/assets/styles/theme'

declare module 'styled-components' {
    interface Palette {
        main: {
            index: string
            primary: string
        }
        background: {
            index: string
            paper: string
            default: string
        }
        grey: {
            index: string
            dark: string
            main: string
            light: string
            highlight: string
        }
        font: {
            index: string
            main: string
            secondary: string
            reverse: string
        }
        accent: {
            index: string
            main: string
        }
    }
    type PaletteKey = keyof Palette

    interface Spacing {
        none: number
        nano: number
        micro: number
        small: number
        medium: number
        standard: number
        large: number
        largeX: number
        largeXX: number
        largeXXX: number
        huge: number
        hugeX: number
        hugeXX: number
        hugeXXX: number
        auto: 'auto'
    }
    type SpacingKey = keyof Spacing

    interface FontVariantProps {
        tag: string
        size: number
        weight: number
        color: string
        transform?: 'uppercase' | 'lowercase' | 'none'
    }

    interface TypographyProps {
        default: FontVariantProps
        title: FontVariantProps
        subtitle: FontVariantProps
        caption: FontVariantProps
        body1: FontVariantProps
        body2: FontVariantProps
    }
    type TypographyKey = keyof TypographyProps

    export interface DefaultTheme {
        palette: Palette
        space: Spacing
        typography: TypographyProps
        applySpace: (key: SpacingKey) => string
    }
}
