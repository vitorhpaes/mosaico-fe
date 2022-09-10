import React from 'react'

import { Spacing } from '@ds'

interface TabContainerProps {
    children: React.ReactNode
    active: boolean
}

const TabContainer: React.FC<TabContainerProps> = ({ children, active }) => {
    if (!active) return null
    return <Spacing py="standard">{children}</Spacing>
}

export default TabContainer
