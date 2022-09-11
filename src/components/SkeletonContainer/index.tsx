import React from 'react'

interface SkeletonContainerProps {
    repeat: number
    children: React.ReactNode
}

const SkeletonContainer: React.FC<SkeletonContainerProps> = ({
    repeat,
    children,
}) => {
    const skeletons = []
    for (let i = 0; i < repeat; i++) {
        skeletons.push(children)
    }

    return <>{skeletons}</>
}

export default SkeletonContainer
