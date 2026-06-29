import { useState } from 'react'

interface ContactFormProps {
    onAdd: (name: string, email: string) => void
}

function ReceiptForm({ onAdd }: ContactFormProps) {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const[errors, setErrors] = useState<Record<string, string>>({})

    function validate(): Record<string, string> {
        const errs: Record<string, string> = {};
        if(!name.trim()) errs.name = 'Name is required'
        if (!email.includes('@')) errs.email = 'Valid email is required'
        return errs
    }

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        const errs = validate()
        setErrors(errs)
        if (Object.keys(errs).length > 0) return

        onAdd(name.trim(), email.trim())
        setName('')
        setEmail('')
        setErrors({})
    }

    return (
        <form onSubmit={handleSubmit} style={{ margin: '24px', padding: '24px' ,border: '2px solid #333'}}>
            <h2>Email a receipt:</h2>
            <div style={{ marginBottom: '12px' }}>
                <label>Name: </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ padding: '6px', width: '150px' }}
                />
                {errors.name && <span style={{ color: 'red', marginLeft: '8px' }}>{errors.name}</span>}
            </div>
            <div style={{ marginBottom: '12px' }}>
                <label>Email: </label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: '6px', width: '150px' }}
                />
                {errors.email && <span style={{ color: 'red', marginLeft: '8px' }}>{errors.email}</span>}
            </div>
            <button type="submit" style={{ padding: '8px 16px'}}>Submit</button>
        </form>
    )
}

export default ReceiptForm