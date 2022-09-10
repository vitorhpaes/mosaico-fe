import images from '@images/urls.json'
interface NormalizedProduct {
    id: number
    title: string
    minifiedTitle: string
    price: string
    category: string
    description: string
    image: string
    images: string[]
    url: string
}

export const normalizeProduct = (product: any): NormalizedProduct => ({
    ...product,
    minifiedTitle: product.title.split(' ').slice(0, 5).join(' '),
    url: `/product/${product.id}`,
    images: [product.image, images.connector, images.headphone, images.headphoneConnector],
})

export const normalizeProducts = (products: any[]) =>
    products.map(normalizeProduct)
