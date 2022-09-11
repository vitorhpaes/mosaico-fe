import styled from 'styled-components'
import { size, SizeProps } from 'styled-system'

const Divisor = styled.hr<SizeProps>`
    background-color: ${({ theme }) => theme.palette.main.primary};

    margin-left: auto;
    margin-right: auto;
    margin: 0;

    border: none;
    border-radius: ${({ theme }) => theme.applySpace('micro')};

    width: 50%;
    height: 3px;
    ${size};
`

export default Divisor
