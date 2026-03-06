import { Link } from 'react-router-dom'
import './ProductCard.css'

function ProductCard({ product }) {
  const { id, name, price, image, badge } = product

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="card-link">
        <div className="card-image-container">
          {badge && (
            <span className={`card-badge ${badge.toLowerCase()}`}>
              {badge}
            </span>
          )}
          <div className="card-image">
            <img src={image} alt={name} />
          </div>
        </div>
        
        <div className="card-details">
          <h3 className="card-title">{name}</h3>
          <div className="card-price-row">
            <span className="card-price">${price.toFixed(2)}</span>
          </div>
          <button className="card-button">View Details</button>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard

