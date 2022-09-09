import styled from 'styled-components'

const StyledChipRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    flex-wrap: nowrap;
    max-width: 100%;
    overflow-y: auto;

    ::-webkit-scrollbar {
        display: none;
    }

    gap: ${({ theme }) => theme.applySpace('medium')};
`

export default StyledChipRow
