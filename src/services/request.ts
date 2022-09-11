import { getCompleteURL } from '@app/helpers/queryParams'

export interface RequestProps {
    method?: 'GET' | 'POST' | 'PATCH' | 'PUT'
    body?: Object
    params?: { [key: string]: any } | null
}

const fakeStoreBaseURL = 'https://fakestoreapi.com'
const mockApiBaseURL = 'https://631d0c7b789612cd07a5b37f.mockapi.io'

const request = async (
    baseUrl: string,
    endpoint: string,
    { method = 'GET', body, params = null }: RequestProps
) => {
    const options = {
        method,
        body: JSON.stringify(body),
    }

    const completeUrl = getCompleteURL(`${baseUrl}${endpoint}`, params)

    return await fetch(completeUrl, options)
        .then(async (response) => await response.json())
        .catch((error) => console.error(error))
}

export const fakeStoreRequest = async (
    endpoint: string,
    options: RequestProps = {}
) => await request(fakeStoreBaseURL, endpoint, options)

export const mockApiRequest = async (
    endpoint: string,
    options: RequestProps = {}
) => await request(mockApiBaseURL, endpoint, options)
