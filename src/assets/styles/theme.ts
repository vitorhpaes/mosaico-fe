import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
    palette: {
        main: {
            primary: '#0ACF83',
        },
        background: {
            paper: '#fff',
            default: '#F6F6F6',
        },
        grey: {
            dark: '#7F7F7F',
            main: '#BABABA',
            light: '#F3F3F3',
            highlight: '#F6F6F6',
        },
        font: {
            main: '#000000',
            secondary: '#7F7F7F',
            reverse: '#fff',
            // disabled: '',
        },
        accent: {
            main: '#FFC120',
        },
    },
    spacing: {
        none: 0,
        nano: 2,
        micro: 4,
        small: 8,
        medium: 12,
        standard: 16,
        large: 24,
        largeX: 32,
        largeXX: 40,
        largeXXX: 48,
        huge: 64,
        hugeX: 80,
        hugeXX: 96,
        hugeXXX: 160,
    },
    applySpace(key) {
        return `${this.spacing[key]}px`
    },
}

export default theme
