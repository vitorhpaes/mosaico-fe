import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

type MenuOptions = 'stack' | 'default' | 'custom'

interface LayoutState {
    navbar: MenuOptions
}

const initialState: LayoutState = {
    navbar: "default"
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setNavbarType(state, action: PayloadAction<MenuOptions>) {
            state.navbar = action.payload
        },
    },
})

export const { setNavbarType } = layoutSlice.actions

export default layoutSlice.reducer