import './SocialGrid.css'

function SocialGrid() {
  // Sample images - using the scissors images from public folder
  const socialImages = [
    {
      id: 1,
      image: '/images/bb.jpeg',
      alt: 'Barber using ApexCut scissors'
    },
    {
      id: 2,
      image: '/images/nn.jpeg',
      alt: 'Professional grooming with ApexCut'
    },
    {
      id: 3,
      image: '/images/ww.jpeg',
      alt: 'Barber styling hair'
    },
    {
      id: 4,
      image: '/images/tt.jpeg',
      alt: 'Precision cutting with ApexCut'
    }
  ]

  return (
    <section className="social-grid-section">
      <div className="social-grid-container">
        <div className="social-grid-header">
          <h2 className="social-grid-heading">Follow the Edge @ApexCut</h2>
          <p className="social-grid-subheading">
            Join our community of professional barbers and groomers
          </p>
        </div>
        
        <div className="social-grid">
          {socialImages.map((item) => (
            <a 
              key={item.id}
              href="https://instagram.com/apexcut"
              target="_blank"
              rel="noopener noreferrer"
              className="social-grid-item"
            >
              <img 
                src={item.image} 
                alt={item.alt}
                className="social-grid-image"
              />
              <div className="social-grid-overlay">
                <div className="social-grid-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="social-grid-text">@ApexCut</span>
              </div>
            </a>
          ))}
        </div>
        
        <div className="social-grid-cta">
          <a 
            href="https://instagram.com/apexcut" 
            target="_blank"
            rel="noopener noreferrer"
            className="social-grid-link"
          >
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}

export default SocialGrid

