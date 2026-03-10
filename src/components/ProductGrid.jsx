
import { products } from '../data/products'
import ProductCard from './ProductCard'
import './ProductGrid.css'

function ProductGrid() {
  // Get first 8 products for display
  const displayProducts = products.slice(0, 8).map((product, index) => ({
    ...product,
    badge: index < 4 ? (index % 2 === 0 ? 'Sale' : 'New') : null
  }))

  return (
    <section className="product-grid-section">
      <div className="grid-container">
        <div className="grid-header">
          <h2 className="grid-title">Professional Collection</h2>
          <p className="grid-subtitle">
            Premium tools crafted for master barbers and professional groomers
          </p>
        </div>
        
        <div className="product-grid">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid

