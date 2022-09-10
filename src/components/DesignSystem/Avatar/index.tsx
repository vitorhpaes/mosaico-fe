import React from 'react'
import styled, { SpacingKey, ThemeContext } from 'styled-components'

interface StyledAvatarProps {
    size: SpacingKey
    src: string
}

const Avatar = styled.div<StyledAvatarProps>`
    border-radius: 100%;
    width: ${({ theme, size }) => theme.applySpace(size)};
    height: ${({ theme, size }) => theme.applySpace(size)};
    background-repeat: no-repeat;
    background-image: url(${({ src }) => src});
    background-position: center;
    background-size: cover;
`

export default Avatar
