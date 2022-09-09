import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');

    * {
        box-sizing: border-box;
        font-family: 'DM Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        letter-spacing: 0.2px;
    }

    body {
        margin: 0;
    }

`

export default GlobalStyle
