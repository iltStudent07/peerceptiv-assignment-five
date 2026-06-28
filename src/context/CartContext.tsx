import React, {createContext, useContext, useReducer } from 'react'
import cartReducer from '../reducers/cartReducer'
import type { CartItem, CartAction } from '../types/types'

interface CartContextValue {
    cart: CartItem[]
    dispatch: React.Dispatch<CartAction>
}
const CartContext = createContext<CartContextValue | undefined>(undefined)

interface CartProviderProps {
    children: React.ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, dispatch] = useReducer(cartReducer, [])

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext)