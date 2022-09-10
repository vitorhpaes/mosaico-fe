const BREAKPOINTS = {
    desktop: 1200
}

export const isMobile = screen.width < BREAKPOINTS.desktop
export const isDesktop = !isMobile