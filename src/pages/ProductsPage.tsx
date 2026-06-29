import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../types/types'


function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] =useState<boolean>(true)

    useEffect(() => {
        fetch('/gameSystems.json')
            .then((res) => res.json())
            .then((data: Product[]) => {
                setProducts(data);
                setLoading(false);
            })
    }, [])

    if (loading) return <p>Loading products...</p>

    return (
        <div>
            <h1>Products:</h1>
            <p style={{ borderBottom: '2px solid #ddd'}}>Below you'll find all the amazing products we have to offer:</p>
            <div>
                <h2 style={{padding: '24px'}}>Game Systems:</h2>
                <ul style={{listStyleType: 'none', textAlign: 'left'}}>
                    {products.map(product => (
                        <li key={product.id} style={{padding: '14px'}}><Link to={`/products/${product.id}`}>{product.name}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProductsPage