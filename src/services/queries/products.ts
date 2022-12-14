import { useQuery } from 'react-query'
import { normalizeProduct, normalizeProducts } from '../normalizers/products'
import { fakeStoreRequest, mockApiRequest } from '../request'

const fetchProducts = (params: Object) =>
    fakeStoreRequest('/products', { params })

const fetchProduct = (productId: string) =>
    fakeStoreRequest(`/products/${productId}`)

const fetchProductReviews = () => mockApiRequest('/reviews')

export const useFeaturedProducts = () =>
    useQuery('featured-products', async () => {
        const response = await fetchProducts({
            limit: 10,
        })
        return normalizeProducts(response)
    })

export const useProduct = (productId: string) =>
    useQuery(
        ['single-product', productId],
        async () => {
            const response = await fetchProduct(productId)

            response.reviews = await fetchProductReviews()

            return normalizeProduct(response)
        },
        {
            enabled: !!productId,
        }
    )
