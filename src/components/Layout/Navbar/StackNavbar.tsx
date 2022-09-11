import React from 'react'
import Navbar from '.'

import { FiChevronLeft, FiShoppingCart } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const StackNavbar: React.FC = () => {
    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    return (
        <Navbar>
            <FiChevronLeft size={20} onClick={goBack} />
            <FiShoppingCart size={20} />
        </Navbar>
    )
}

export default StackNavbar
