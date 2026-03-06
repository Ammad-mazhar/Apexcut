import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const dropdownItems = [
  { name: 'Hair Grooming', path: '/products/hair' },
  { name: 'Pet Grooming', path: '/products/pet' },
  { name: 'Thinning Shears', path: '/products/thinning' },
  { name: 'Texturizers', path: '/products/texturizers' },
  { name: 'Left-Handed Shears', path: '/products/left-handed' },
]

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="logo-text">APEXCUT</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="navbar-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li 
            className="dropdown-container"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              className="nav-link dropdown-trigger"
              onClick={toggleDropdown}
            >
              All Products
              <svg 
                className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
                xmlns="http://www.w3.org/2000/svg" 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
              <div className="dropdown-content">
                {dropdownItems.map((item) => (
                  <Link 
                    key={item.name}
                    to={item.path}
                    className="dropdown-item"
                    onClick={closeDropdown}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li>
            <Link to="/custom-order" className="nav-link custom-build-link">
              Custom Build
              <span className="custom-build-badge">New</span>
            </Link>
          </li>
        </ul>

        {/* Cart Icon */}
        <div className="navbar-cta">
          <button className="cart-button" aria-label="Shopping cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/custom-order" className="mobile-link mobile-custom-link" onClick={() => setIsMobileMenuOpen(false)}>
            Custom Build
            <span className="mobile-custom-badge">New</span>
          </Link>
          <div className="mobile-dropdown">
            <button 
              className="mobile-link dropdown-trigger"
              onClick={toggleDropdown}
            >
              All Products
              <svg 
                className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}
                xmlns="http://www.w3.org/2000/svg" 
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={`mobile-dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
              {dropdownItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className="mobile-dropdown-item"
                  onClick={() => {
                    closeDropdown()
                    setIsMobileMenuOpen(false)
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

