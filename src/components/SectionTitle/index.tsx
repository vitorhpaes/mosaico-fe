import React from 'react'
import { Typography, Spacing, Link } from '@ds'

interface SectionTitleProps {
    title: string
    redirect?: {
        text: string
        target: string
    }
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, redirect }) => {
    return (
        <Spacing my="large" pr="large">
            <Typography variant="subtitle">{title}</Typography>
            {redirect && (
                <Spacing ml={'auto'}>
                    <Typography variant="body1" color="grey">
                        <Link to={redirect?.target}>{redirect?.text}</Link>
                    </Typography>
                </Spacing>
            )}
        </Spacing>
    )
}

export default SectionTitle
