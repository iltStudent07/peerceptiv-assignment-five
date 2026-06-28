import { NavLink } from 'react-router-dom'

function Navbar() {
    const linkStyle = ({ isActive }: {isActive: boolean}) => ({
        color: isActive ? '#2574A9' : '#333',
        fontWeight: isActive ? 'bold' as const : 'normal as const',
        textDecoration: 'none',
        padding: '8px 16px',
    })

    return (
        <nav style={{
            display: 'flex',
            gap: '8px',
            padding: '16px',
            backgroundColor: '#f4f6f9',
            borderBottom: '2px solid #ddd'
        }}>
            <NavLink to="/" style={linkStyle}>HomePage</NavLink>
            <NavLink to="/products" style={linkStyle}>Products</NavLink>
            <NavLink to="/cart" style={linkStyle}>Cart</NavLink>
        </nav>
    )
}

export default Navbar