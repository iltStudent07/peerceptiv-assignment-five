import React, {createContext, useContext, useReducer, useEffect } from 'react'
import cartReducer from '../reducers/cartReducer'
import type { Cart, CartItem, CartAction } from '../types/types'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface CartContextValue {
    cart: CartItem[]
    dispatch: React.Dispatch<CartAction>
}
const CartContext = createContext<CartContextValue | undefined>(undefined)

interface CartProviderProps {
    children: React.ReactNode
}



export const CartProvider = ({ children }: CartProviderProps) => {
    const [storedCart, setStoredCart] = useLocalStorage<Cart>('cart',[])
    const [cart, dispatch] = useReducer(cartReducer, storedCart)

    useEffect(() => {
        setStoredCart(cart)
    }, [cart, setStoredCart])
    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext)