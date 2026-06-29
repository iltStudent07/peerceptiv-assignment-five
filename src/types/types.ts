export interface Product {
    id: string
    name: string
    price: number
    category: string
}

export interface CartItem {
    id: string
    item: Product
    itemAmount: number
    totalPrice: number
}

export type Cart = CartItem[]

export type CartAction =
    | { type: 'add'; item: Product }
    | { type: 'delete'; id: string }
    | { type: 'clear-cart' }