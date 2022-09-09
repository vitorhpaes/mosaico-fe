import React from 'react'
import Navbar from '.'

import { CgMenuLeft } from 'react-icons/cg'
import logo from '@images/logo.svg'
import images from '@images/urls.json'
import { Avatar } from '@ds'

const DefaultNavbar: React.FC = () => {
    return (
        <Navbar>
            <CgMenuLeft size={20} />
            <img src={logo} />
            <Avatar src={images.brother} size={'large'} />
        </Navbar>
    )
}

export default DefaultNavbar
