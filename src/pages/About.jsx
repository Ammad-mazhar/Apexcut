import './About.css'

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <span className="about-hero-tagline">Our Heritage</span>
          <h1 className="about-hero-heading">The Edge of Excellence</h1>
          <p className="about-hero-subheading">
            Where tradition meets precision engineering
          </p>
        </div>
        <div className="about-hero-decoration">
          <div className="about-hero-line"></div>
        </div>
      </section>

      {/* The Story Section - Two Column Layout */}
      <section className="about-story">
        <div className="about-story-container">
          <div className="about-story-image">
            <img 
              src="/images/nn.jpeg" 
              alt="Master craftsman at work" 
            />
            <div className="about-story-image-accent"></div>
          </div>
          <div className="about-story-content">
            <span className="about-section-label">Our Story</span>
            <h2 className="about-story-title">From Bookbinding to Master Steel</h2>
            <div className="about-story-text">
              <p>
                ApexCut was born from an unexpected journey—one that began not in a barber shop, but in the quiet precision of traditional bookbinding. Our founder, having spent decades mastering the delicate art of preserving knowledge, discovered that the same principles of balance, sharpness, and craftsmanship that defined fine bookbinding could revolutionize the world of professional grooming tools.
              </p>
              <p>
                We partnered with Japanese metallurgists who had spent generations perfecting the art of steel. The result? Shears and scissors that don't just cut—they perform. Every blade is a testament to the marriage of old-world discipline and modern engineering.
              </p>
              <p>
                Today, ApexCut instruments are trusted by master barbers and professional groomers worldwide. But our soul remains the same: to create tools that honor the craftsman who wields them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="about-pillars">
        <div className="about-pillars-container">
          <span className="about-section-label">Our Philosophy</span>
          <h2 className="about-pillars-title">Three Pillars of Excellence</h2>
          
          <div className="about-pillars-grid">
            {/* Pillar 1 */}
            <div className="about-pillar">
              <div className="about-pillar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="32" cy="32" r="28" />
                  <path d="M32 12 L32 52 M20 22 L44 22 M20 32 L44 32 M20 42 L44 42" />
                  <path d="M26 52 L32 12 L38 52" />
                </svg>
              </div>
              <h3 className="about-pillar-heading">Japanese 440C Steel</h3>
              <p className="about-pillar-text">
                The gold standard in cutlery steel. Our 440C blades maintain their edge up to 5x longer than conventional shears, with superior corrosion resistance and a mirror-finish that glides through hair effortlessly.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="about-pillar">
              <div className="about-pillar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="32" cy="32" r="12" />
                  <path d="M32 20 L32 8 M32 44 L32 56 M20 32 L8 32 M44 32 L56 32" />
                  <path d="M23 23 L15 15 M41 41 L49 49 M23 41 L15 49 M41 23 L49 15" />
                  <circle cx="32" cy="32" r="6" />
                </svg>
              </div>
              <h3 className="about-pillar-heading">Ergonomic Balance</h3>
              <p className="about-pillar-text">
                Every ApexCut shear is weight-balanced to within 0.1 grams. Our offset handles and tension systems are designed to reduce hand fatigue, allowing professionals to cut with precision for hours without strain.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="about-pillar">
              <div className="about-pillar-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M32 8 L32 56" />
                  <path d="M24 16 L40 16" />
                  <path d="M20 24 L44 24" />
                  <path d="M16 32 L48 32" />
                  <path d="M20 40 L44 40" />
                  <path d="M24 48 L40 48" />
                  <circle cx="32" cy="8" r="3" />
                </svg>
              </div>
              <h3 className="about-pillar-heading">Hand-Finished Sharpening</h3>
              <p className="about-pillar-text">
                Each blade undergoes a 12-stage hand-sharpening process by master sharpeners. Our convex edge is polished to surgical precision, ensuring the cleanest cuts that preserve hair integrity and prevent split ends.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

