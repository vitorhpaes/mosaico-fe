import { useQuery } from 'react-query'
import { normalizeCategories } from '../normalizers/categories'
import { normalizeProducts } from '../normalizers/products'
import { fakeStoreRequest } from '../request'

const fetchCategories = async () =>
    await fakeStoreRequest('/products/categories')

export const useCategories = () =>
    useQuery(['categories'], async () => {
        const response = await fetchCategories()
        return normalizeCategories(response)
    })
