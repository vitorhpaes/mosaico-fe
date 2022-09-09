import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'

export type NavbarOptions = 'stack' | 'default' | 'custom'

export interface LayoutState {
    navbar: NavbarOptions
}

const initialState: LayoutState = {
    navbar: "default"
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setNavbarType(state, action: PayloadAction<NavbarOptions>) {
            state.navbar = action.payload
        },
    },
})

export const { setNavbarType } = layoutSlice.actions

export default layoutSlice.reducer