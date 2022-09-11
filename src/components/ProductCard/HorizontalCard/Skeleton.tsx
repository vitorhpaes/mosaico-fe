import React from 'react'
import ContentLoader from 'react-content-loader'
import { useTheme } from 'styled-components'

const Skeleton: React.FC = () => {
    const theme = useTheme()
    return (
        <ContentLoader
            speed={3}
            width={320}
            height={170}
            backgroundColor={theme.palette.grey.main}
            foregroundColor={theme.palette.grey.light}
        >
            <rect width={320} height={170} rx={10} ry={10} />
        </ContentLoader>
    )
}

export default Skeleton
