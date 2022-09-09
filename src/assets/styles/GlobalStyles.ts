import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

    *, body {
        box-sizing: border-box;
        font-family: 'DM Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        letter-spacing: 0.2px;
    }
    
    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${({ theme }) => theme.palette.grey.index};
    }
    :-ms-input-placeholder {
        color: ${({ theme }) => theme.palette.grey.index};
    }

    input, textarea {
        &:focus {
            outline:none
        }
    }

    body {
        margin: 0;
    }

`

export default GlobalStyle
