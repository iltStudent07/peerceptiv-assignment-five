import { useCart } from '../context/CartContext'

function Header() {
    const { cart } = useCart();
    return (
        <div style={{ display: 'flex', justifyContent: "space-around", margin: '18px'}}>
            <p><strong>Game Depot</strong></p>
            <p><strong>Items in Cart:</strong> {cart.itemAmount}</p>
        </div>
    )
}

export default Header