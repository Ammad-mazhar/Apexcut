import { Link } from 'react-router-dom'
import { products } from '../data/products'
import './BestSellerSection.css'

function BestSellerSection() {
  const bestSellerProducts = products.filter(product => product.isBestSeller).slice(0, 4)

  return (
    <section className="bestseller-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Most Selling</h2>
          <Link to="/products/all" className="view-all-link">View All</Link>
        </div>
        
        <div className="bestseller-grid">
          {bestSellerProducts.map((product) => (
            <div key={product.id} className="bestseller-card">
              <Link to={`/product/${product.id}`} className="bestseller-link">
                <div className="bestseller-image-container">
                  <span className="best-seller-ribbon">Best Seller</span>
                  <div className="bestseller-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                </div>
                
                <div className="bestseller-details">
                  <h3 className="bestseller-name">{product.name}</h3>
                  <span className="bestseller-price">${product.price.toFixed(2)}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSellerSection

