import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import type { Product } from '../types/types'

function ProductDetail() {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetch('/gameSystems.json')
            .then ( res => {
                if (!res.ok) throw new Error('Product not found')
                    return res.json()
            })
            .then((data: Product[]) => {
                const itemPage = data.find((item) => item.id === id) ?? null
                setProduct(itemPage)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    }, [id])

    if (loading) return <p>Loading...</p>
    if (!product) return <p>Product not found. <button onClick={() => navigate('/products')}>Back to Products</button></p>

    return (
        <div>
            <button onClick={() => navigate(-1)} style={{ marginBottom: '16px'}}>Back</button>
            <h1>{product.name}</h1>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
        </div>
    )
}

export default ProductDetail