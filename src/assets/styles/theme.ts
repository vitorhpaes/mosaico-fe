import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
    palette: {
        main: {
            index: '#0ACF83',
            primary: '#0ACF83',
        },
        background: {
            index: '#fff',
            paper: '#fff',
            default: '#F6F6F6',
        },
        grey: {
            index: '#BABABA',
            dark: '#7F7F7F',
            main: '#BABABA',
            light: '#F3F3F3',
            highlight: '#F6F6F6',
        },
        font: {
            index: '#000000',
            main: '#000000',
            secondary: '#7F7F7F',
            reverse: '#fff',
            // disabled: '',
        },
        accent: {
            index: '#FFC120',
            main: '#FFC120',
        },
    },
    space: {
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
    typography: {
        title: {
            tag: 'h1',
            size: 28,
            weight: 700,
            color: '#000',
            transform: 'uppercase',
        },
        subtitle: {
            tag: 'h2',
            size: 16,
            weight: 400,
            color: '#000',
        },
        body1: {
            tag: 'h4',
            size: 14,
            weight: 400,
            color: '#000',
        },
        body2: {
            tag: 'h5',
            size: 12,
            weight: 700,
            color: '#000',
        },
        caption: {
            tag: 'caption',
            size: 12,
            weight: 400,
            color: '#7F7F7F',
        },
        default: {
            tag: 'h5',
            size: 16,
            weight: 400,
            color: '#000',
        },
    },
    applySpace(key) {
        return `${this.space[key]}px`
    },
}

export default theme
