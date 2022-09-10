import styled from 'styled-components'

const TabsMenu = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: ${({theme}) => theme.applySpace('largeX')};
    overflow-x: auto;
    width: 100%;
`
export default TabsMenu
export { default as TabMenuItem } from './TabMenuItem'
export { default as TabContainer } from './TabContainer'
