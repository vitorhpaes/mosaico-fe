import images from '@images/urls.json'
import { randomizeBoolean, randomizeInt } from './../../helpers/randomize'

export interface NormalizedReview {
    consumer: string
    avatar: string
    date: Date
    review: string
    rating: number
    images?: string[]
}
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
    reviews?: {
        data: NormalizedReview[]
        count: number
    }
}

export const normalizeProduct = (product: any): NormalizedProduct => ({
    ...product,
    minifiedTitle: product.title.split(' ').slice(0, 5).join(' '),
    url: `/product/${product.id}`,
    images: [
        product.image,
        images.connector,
        images.headphone,
        images.headphoneConnector,
    ],
    reviews: product?.reviews && {
        count: product.reviews.length,
        data: product.reviews.slice(0, 10).map(normalizeReview),
    },
})

const normalizeReview = (review: any): NormalizedReview => ({
    ...review,
    date: new Date(review.createdAt),
    review: review.description,
    rating: randomizeInt(0, 5),
    images: randomizeBoolean()
        ? [images.headphone, images.headphoneConnector, images.headphone]
        : undefined,
})

export const normalizeProducts = (products: any[]) =>
    products.map(normalizeProduct)
