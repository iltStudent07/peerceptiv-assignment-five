import { useCart } from '../context/CartContext'

function CartPage(){
    const { cart, dispatch } = useCart()
    const totalItems = cart.reduce((sum, cartItem) => sum + cartItem.itemAmount, 0)
    const totalPrice = cart.reduce((sum, cartItem) => sum + (cartItem.item.price * cartItem.itemAmount), 0)
    const roundPrice = Math.round(totalPrice)
    return (
        <div>
            <h1>Your Cart: {totalItems}</h1>
            <h2>Total Amount: {roundPrice}</h2>
            <ul style={{ listStyleType: 'none'}}>
                {cart.map(cartItem => (
                    <li key={cartItem.id}>{cartItem.item.name} -- {cartItem.item.price} x {cartItem.itemAmount}

                    <button onClick={() => dispatch({ type: 'delete', id: cartItem.id})}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => dispatch({ type: 'clear-cart'})}>Clear Cart</button>
        </div>
    )
}

export default CartPage