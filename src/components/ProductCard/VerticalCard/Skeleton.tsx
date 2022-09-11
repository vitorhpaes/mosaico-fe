import React from 'react'
import ContentLoader from 'react-content-loader'
import { useTheme } from 'styled-components'

const Skeleton: React.FC = () => {
    const theme = useTheme()
    return (
        <ContentLoader
            speed={3}
            width={130}
            height={230}
            backgroundColor={theme.palette.grey.main}
            foregroundColor={theme.palette.grey.light}
        >
            <rect width={130} height={230} rx={15} ry={15} />
        </ContentLoader>
    )
}

export default Skeleton
