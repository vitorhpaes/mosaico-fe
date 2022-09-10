const isValidParam = (param: string | string[]) => {
    if (!param) return false
    if (!param.length) return false
    return true
}

interface ParamsProps {
    [key: string]: string | string[]
}

export const getCompleteURL = (url: string, params: ParamsProps) => {
    if (params) {
        const separator = url.includes('?') ? '&' : '?'
        const query = new URLSearchParams()
        for (const [key, value] of Object.entries(params)) {
            if (Array.isArray(value)) {
                value.map((data) =>
                    !isValidParam(data) ? query.append(key, data) : null
                )
                continue
            }
            if (!isValidParam(value)) query.append(key, String(value))
        }
        return `${url}${query && separator}${query}`
    }

    return url
}
