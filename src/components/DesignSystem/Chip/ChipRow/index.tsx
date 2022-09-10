import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'

const StyledChipRow = styled.div<SpaceProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    flex-wrap: nowrap;
    max-width: 100%;
    overflow-y: auto;

    ::-webkit-scrollbar {
        display: none;
    }

    gap: ${({ theme }) => theme.applySpace('small')};
    ${space}
`

export default StyledChipRow
