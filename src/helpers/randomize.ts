export function randomizeInt(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

export function randomizeBoolean() {
    return Math.random() < 0.5
}
