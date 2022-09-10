import styled from "styled-components";

const PageContainer = styled.div`
    padding-left: ${({ theme }) => theme.applySpace('large')};
    padding-right: ${({ theme }) => theme.applySpace('large')};
`

export default PageContainer