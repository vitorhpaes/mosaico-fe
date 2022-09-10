interface NormalizedProduct {
    id: number
    title: string
    minifiedTitle: string
    price: string
    category: string
    description: string
    image: string
    url: string
}

export const normalizeProduct = (product: any): NormalizedProduct => ({
    ...product,
    minifiedTitle: product.title.split(' ').slice(0, 5).join(' '),
    url: `/product/${product.title.split(' ').join('-')}/${product.id}`,
})

export const normalizeProducts = (products: any[]) =>
    products.map(normalizeProduct)
