import React from 'react'
import styled from 'styled-components'

import { Divisor, Typography, Spacing } from '@ds'

const StyledTabMenuItem = styled.div`
    display: flex;
    flex-direction: column;
`

interface TabMenuItemProps {
    title: string
    active?: boolean
    onClick?: () => void
}

const TabMenuItem: React.FC<TabMenuItemProps> = ({
    title,
    active,
    onClick,
}) => {
    return (
        <StyledTabMenuItem onClick={onClick}>
            <Typography variant="subtitle">{title}</Typography>
            {active && (
                <Spacing my="medium" justifyContent={'center'}>
                    <Divisor />
                </Spacing>
            )}
        </StyledTabMenuItem>
    )
}

export default TabMenuItem
