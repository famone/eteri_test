export interface GoodItem {
    id?: number,
    name: object,
    slug: string,
    shortDescription: string,
    picture: string | null,
    gallery: string[],
    spec: object,
    price: object | null
}
export interface CartItem {
    id?: number,
    name: object,
    slug: string,
    shortDescription: string,
    picture: string | null,
    spec: object,
    price: object | null,
    quantity: number | 0
}
