import 'styled-components'
import theme from '@app/assets/styles/theme'

declare module 'styled-components' {
    interface Palette {
        main: {
            primary: string
        }
        background: {
            paper: string
            default: string
        }
        grey: {
            dark: string
            main: string
            light: string
            highlight: string
        }
        font: {
            main: string
            secondary: string
            reverse: string
        }
        accent: {
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
    }
    type SpacingKey = keyof Spacing

    export interface DefaultTheme {
        palette: Colors
        spacing: Spacing
        applySpace: (key: SpacingKey) => string
    }
}
