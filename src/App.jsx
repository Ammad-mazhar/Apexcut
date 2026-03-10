import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import CartSidebar from './components/CartSidebar'
import { CartProvider } from './context/CartContext'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Shipping from './pages/Shipping'
import Returns from './pages/Returns'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import FAQ from './pages/FAQ'
import CustomOrder from './pages/CustomOrder'
import CategoryPage from './pages/CategoryPage'
import ProductDetail from './components/ProductDetail'
import './App.css'

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/custom-order" element={<CustomOrder />} />
            <Route path="/products/:category" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
        <CartSidebar />
      </div>
    </CartProvider>
  )
}

export default App

