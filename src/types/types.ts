export interface Product {
    id: string
    name: string
    price: number
    category: string
}

export interface Cart {
    item: Product
    itemAmount: number
    totalPrice: number
}

export type CartAction =
    | { type: 'add'; item: string }
    | { type: 'delete'; id: string }
    | { type: 'clear-cart'; id: number; item: string}