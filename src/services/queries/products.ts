import { useQuery } from 'react-query'
import { normalizeProducts } from '../normalizers/products'
import { fakeStoreRequest } from '../request'

const fetchProducts = (params: Object) =>
    fakeStoreRequest('/products', { params })

export const useFeaturedProducts = () =>
    useQuery('featured-products', async () => {
        const response = await fetchProducts({
            limit: 10,
        })
        return normalizeProducts(response)
    })
