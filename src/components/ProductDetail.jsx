import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import './ProductDetail.css'

function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  const { addToCart } = useCart()
  
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('specifications')

  // Get related products (same category, excluding current product, max 3)
  const relatedProducts = product 
    ? products
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 3)
    : []

  // Use product image or fallback
  const displayImage = product?.image || '/images/bb.jpeg'

  const images = [
    displayImage,
    displayImage,
    displayImage,
  ]

  const tabs = [
    { id: 'specifications', label: 'Specifications' },
    { id: 'material', label: 'Material (Japanese 440C Steel)' },
    { id: 'shipping', label: 'Shipping' },
  ]

  const tabContent = {
    specifications: (
      <ul className="specs-list">
        <li><span>Blade Length</span><span>6.5 inches</span></li>
        <li><span>Total Length</span><span>8.5 inches</span></li>
        <li><span>Weight</span><span>85 grams</span></li>
        <li><span>Blade Type</span><span>Convex Edge</span></li>
        <li><span>Handle Type</span><span>Offset Ergonomic</span></li>
        <li><span>Finish</span><span>Satin Finish</span></li>
      </ul>
    ),
    material: (
      <div className="material-content">
        <p>Our Professional Pet Grooming Scissor is crafted from premium Japanese 440C stainless steel, known for its exceptional hardness, edge retention, and corrosion resistance.</p>
        <p>Each blade is precision-ground to a convex edge, ensuring the cleanest cuts through all coat types. The ergonomic offset handle reduces hand fatigue during extended grooming sessions.</p>
        <ul>
          <li>✓ Japanese 440C Steel - Industry benchmark for quality</li>
          <li>✓ Vacuum heat-treated for optimal hardness (58-60 HRC)</li>
          <li>✓ Hand-polished convex blades</li>
          <li>✓ Rust-resistant finish</li>
        </ul>
      </div>
    ),
    shipping: (
      <div className="shipping-content">
        <p><strong>Free Shipping</strong> on orders over $100</p>
        <p><strong>Standard Delivery:</strong> 5-7 business days</p>
        <p><strong>Express Delivery:</strong> 2-3 business days ($15.99)</p>
        <p>All scissors come with a protective case and care kit included.</p>
        <p>30-day money-back guarantee with free return shipping.</p>
      </div>
    ),
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity)
    }
  }

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    )
  }

  return (
    <section className="product-detail">
      <div className="product-container">
        {/* Left Side - Image Gallery */}
        <div className="product-gallery">
          <div className="main-image">
            <img src={images[selectedImage]} alt={product.name} />
          </div>
          <div className="thumbnail-list">
            {images.map((img, index) => (
              <button
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`View ${index + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Product Info */}
        <div className="product-info">
          <span className="product-category">{product.category} Grooming</span>
          <h1 className="product-title">{product.name}</h1>
          
          <div className="product-price-row">
            <span className="product-price">${product.price.toFixed(2)}</span>
            <span className="stock-badge">In Stock</span>
          </div>

          <p className="product-description">
            {product.description}
          </p>

          <div className="purchase-section">
            <div className="quantity-selector">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="qty-btn"
              >
                −
              </button>
              <span className="qty-value">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="qty-btn"
              >
                +
              </button>
            </div>
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

          <div className="trust-badges">
            <div className="badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>2-Year Warranty</span>
            </div>
            <div className="badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
              <span>Free Shipping</span>
            </div>
            <div className="badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="23 4 23 10 17 10"></polyline>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
              </svg>
              <span>30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="product-tabs">
        <div className="tabs-header">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {tabContent[activeTab]}
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="related-products">
          <h2 className="related-title">Related Scissors</h2>
          <div className="related-grid">
            {relatedProducts.map(related => (
              <Link 
                key={related.id} 
                to={`/product/${related.id}`}
                className="related-card"
              >
                <div className="related-image">
                  <img src={related.image} alt={related.name} />
                </div>
                <div className="related-info">
                  <h3>{related.name}</h3>
                  <span className="related-price">${related.price.toFixed(2)}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default ProductDetail

