import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import './CategoryPage.css'

// Map URL params to display titles and filter categories
const categoryConfig = {
  'all': { 
    title: 'All Products', 
    filter: null 
  },
  'hair': { 
    title: 'Professional Hair Grooming Shears', 
    filter: 'Hair' 
  },
  'pet': { 
    title: 'Professional Pet Grooming Shears', 
    filter: 'Pet' 
  },
  'thinning': { 
    title: 'Professional Thinning Shears', 
    filter: 'Hair' 
  },
  'texturizers': { 
    title: 'Texturizing Shears', 
    filter: 'Hair' 
  },
  'left-handed': { 
    title: 'Left-Handed Shears', 
    filter: 'Hair' 
  },
  'sets': { 
    title: 'Professional Sets & Kits', 
    filter: 'Sets' 
  }
}

function CategoryPage() {
  const { category } = useParams()
  
  // Get config for current category, default to 'all' if not found
  const config = categoryConfig[category] || categoryConfig['all']
  
  // Filter products based on category
  const filteredProducts = config.filter 
    ? products.filter(product => product.category === config.filter)
    : products

  // Add badges to products
  const productsWithBadges = filteredProducts.map((product, index) => ({
    ...product,
    badge: index % 3 === 0 ? 'New' : (index % 2 === 0 ? 'Sale' : null)
  }))

  return (
    <section className="category-page">
      <div className="category-container">
        <div className="category-header">
          <h1 className="category-title">{config.title}</h1>
          <p className="category-count">
            {productsWithBadges.length} products
          </p>
        </div>
        
        <div className="category-grid">
          {productsWithBadges.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {productsWithBadges.length === 0 && (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default CategoryPage

