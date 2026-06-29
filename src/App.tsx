import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './Navbar'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/CartPage'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  

  return (
    <>
      <CartProvider>
        <div>
          <Header />
          <Navbar />
          <main style={{ padding: "24px"}}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />}/>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </>
  )
}

export default App
