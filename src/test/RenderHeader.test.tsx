import { render, screen } from '@testing-library/react'
import Header from '../components/Header'
import { CartProvider } from '../context/CartContext'

function renderHeader(){
    render (
        <CartProvider>
            <Header />
        </CartProvider>
    )
}

describe('Header', () => {
    it('renders the header', () => {
        renderHeader()
        expect(screen.getByText('Game Depot')).toBeInTheDocument()
    })

    it('has an initial value of 0 in the Cart item counter', () => {
        renderHeader()
        expect(screen.getByText('0')).toBeInTheDocument()
    })
})