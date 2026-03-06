import { Link } from 'react-router-dom'
import { products } from '../data/products'
import './TrendingSection.css'

function TrendingSection() {
  const trendingProducts = products.filter(product => product.isTrending).slice(0, 4)

  return (
    <section className="trending-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Trending Now</h2>
          <Link to="/products/all" className="view-all-link">View All</Link>
        </div>
        
        <div className="trending-grid">
          {trendingProducts.map((product) => (
            <div key={product.id} className="trending-card">
              <Link to={`/product/${product.id}`} className="trending-link">
                <div className="trending-image-container">
                  <div className="trending-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="trending-overlay">
                    <button className="add-to-cart-btn">Add to Cart</button>
                  </div>
                </div>
                
                <div className="trending-details">
                  <h3 className="trending-name">{product.name}</h3>
                  <span className="trending-price">${product.price.toFixed(2)}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingSection

