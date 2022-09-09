import React from 'react'

import { TextField, TextFieldIconWrapper } from '@ds';
import { FiSearch } from 'react-icons/fi';

const SearchInput: React.FC = () => {
    return (
        <TextField
            before={
                <TextFieldIconWrapper>
                    <FiSearch size={20} />
                </TextFieldIconWrapper>
            }
            placeholder="Search headphone"
        />
    )
}

export default SearchInput
