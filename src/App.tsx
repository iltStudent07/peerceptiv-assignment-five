import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <Navbar />
        <main style={{ padding: "24px"}}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
