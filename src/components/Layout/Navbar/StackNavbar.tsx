import React from 'react'
import Navbar from '.'

import { FiChevronLeft, FiShoppingCart } from 'react-icons/fi'

const StackNavbar: React.FC = () => {
    return (
        <Navbar>
            <FiChevronLeft size={20} />
            <FiShoppingCart size={20} />
        </Navbar>
    )
}

export default StackNavbar
