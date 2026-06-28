import { useCart } from '../context/CartContext'

function Header() {
    const { cart } = useCart();
    const totalItems = cart.reduce((sum, cartItem) => sum + cartItem.itemAmount, 0)
    return (
        <div style={{ display: 'flex', justifyContent: "space-around", margin: '18px'}}>
            <p><strong>Game Depot</strong></p>
            <p><strong>Items in Cart:</strong> {totalItems}</p>
        </div>
    )
}

export default Header