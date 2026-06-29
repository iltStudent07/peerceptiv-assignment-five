import { useCart } from '../context/CartContext'

function Header() {
    const { cart } = useCart();
    const totalItems = cart.reduce((sum, cartItem) => sum + cartItem.itemAmount, 0)
    return (
        <div style={{ background: '#333'}}>
            <div style={{ display: 'flex', justifyContent: "space-around", padding:'24px', color: 'white'}}>
                <p><strong>Game Depot</strong></p>
                <p><strong>Items in Cart:</strong> {totalItems}</p>
            </div>
        </div>
    )
}

export default Header