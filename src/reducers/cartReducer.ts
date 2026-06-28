import type { Cart, CartAction } from '../types/types'

function cartReducer(state: Cart, action: CartAction): Cart {
    switch (action.type) {
        case 'clear-cart':
            return []

        case 'add': {
            const itemInCart = state.find((i) => i.id === action.item.id)

            if (itemInCart) {
                return state.map((cartItem) =>
                    cartItem.id === action.item.id
                        ? {
                              ...cartItem,
                              itemAmount: cartItem.itemAmount + 1,
                              totalPrice: (cartItem.itemAmount + 1) * cartItem.item.price
                          }
                        : cartItem
                )
            }

            return [
                ...state,
                {
                    id: action.item.id,
                    item: action.item,
                    itemAmount: 1,
                    totalPrice: action.item.price
                }
            ]
        }

        case 'delete':
            return state
                .map((cartItem) =>
                    cartItem.id === action.id
                        ? {
                              ...cartItem,
                              itemAmount: cartItem.itemAmount - 1,
                              totalPrice: (cartItem.itemAmount - 1) * cartItem.item.price
                          }
                        : cartItem
                )
                .filter((cartItem) => cartItem.itemAmount > 0)

        default: {
            const unreachable: never = action
            throw new Error('Unhandled action ' + String(unreachable))
        }
    }
}

export default cartReducer