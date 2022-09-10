interface NormalizedProduct {
    id: number
    title: string
    price: string
    category: string
    description: string
    image: string
}

export const normalizeProduct = (product: any): NormalizedProduct => product

export const normalizeProducts = (products: any[]) => products.map(normalizeProduct)
