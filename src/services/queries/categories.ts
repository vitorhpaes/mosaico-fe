import { useQuery } from 'react-query'
import { normalizeCategories } from '../normalizers/categories'
import { normalizeProducts } from '../normalizers/products'
import { fakeStoreRequest } from '../request'

const fetchCategories = async () =>
    await fakeStoreRequest('/products/categories')

const fetchCategorieProducts = async (category: string) =>
    await fakeStoreRequest(`/products/category/${category}`)

export const useCategories = () =>
    useQuery(['categories'], async () => {
        const response = await fetchCategories()
        return normalizeCategories(response)
    })

export const useCategoryProducts = (category?: string) =>
    useQuery(['category-products', category], async () => {
        const response = await fetchCategorieProducts(category)
        return normalizeProducts(response)
    }, {
        enabled: !!category
    })
