import React from 'react'
import { useAppDispatch, useAppSelector } from '@app/state/hooks'
import { NavbarOptions, setNavbarType } from '@app/state/slices/layout'

const withLayoutConfig =
    (page: React.ReactElement) =>
    ({ navbar }: { navbar?: NavbarOptions }) => {
        const { navbar: currentNavbar } = useAppSelector((app) => app.layout)
        const dispatch = useAppDispatch()

        if (currentNavbar !== navbar) {
            dispatch(setNavbarType(navbar))
        }

        return page
    }

export default withLayoutConfig
