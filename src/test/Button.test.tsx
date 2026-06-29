import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ReceiptForm from '../components/ReceiptForm'
import { vi } from 'vitest'
import { CartProvider } from '../context/CartContext'

function RenderForm() {

    const handleAdd = (name: string, email: string) => {
        const customer = {name, email}
        alert(`Thank you ${customer.name}! Your receipt has been sent to ${customer.email}`)
    }    
    render(
        <CartProvider>
            <ReceiptForm onAdd={handleAdd}/> 
        </CartProvider>
        
    )
}

describe('Receipt Form', () => {
    it('renders the form', () => {
        RenderForm()
        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('renders the alert message when user submits the form', async () => {
        const fakeAlert = vi.spyOn(window, 'alert').mockImplementation(() => {})
        RenderForm()
        const user = userEvent.setup()
        const textboxes = screen.getAllByRole('textbox')
        await user.type(textboxes[0], 'Jane Doe')
        await user.type(textboxes[1], 'jane@example.com')
        const submitBtn = screen.getByRole('button')
        await user.click(submitBtn)
        expect(fakeAlert).toHaveBeenCalledTimes(1)
    })
})