import { getCompleteURL } from '@app/helpers/queryParams'

export interface FakeStoreRequestProps {
    method?: 'GET' | 'POST' | 'PATCH' | 'PUT'
    body?: Object
    params?: { [key: string]: any } | null
}

const fakeStoreBaseURL = 'https://fakestoreapi.com'

export const fakeStoreRequest = async (endpoint: string, {
    method = 'GET',
    body,
    params = null,
}: FakeStoreRequestProps = {}) => {
    const options = {
        method,
        body: JSON.stringify(body),
    }

    const completeUrl = getCompleteURL(`${fakeStoreBaseURL}${endpoint}`, params)

    return await fetch(completeUrl, options)
        .then(async (response) => await response.json())
        .catch((error) => console.error(error))
}
