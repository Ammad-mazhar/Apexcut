import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import TrendingSection from '../components/TrendingSection'
import BestSellerSection from '../components/BestSellerSection'
import Testimonials from '../components/Testimonials'
import SocialGrid from '../components/SocialGrid'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <>
      <Hero />
      <TrendingSection />
      <BestSellerSection />
      <ProductGrid />
      
      {/* Bespoke Services Section */}
      <section className="bespoke-section">
        <div className="bespoke-container">
          <div className="bespoke-grid">
            {/* Left: Image */}
            <div className="bespoke-media">
              <div className="bespoke-media-wrapper">
                <img 
                  src="/images/image 5.jpg"
                  alt="Custom ApexCut scissors"
                  className="bespoke-image"
                />
                <div className="bespoke-media-overlay"></div>
              </div>
            </div>
            
            {/* Right: Content */}
            <div className="bespoke-content">
              <span className="bespoke-tagline">Bespoke Services</span>
              <h2 className="bespoke-heading">Tailored to Your Hand</h2>
              <p className="bespoke-copy">
                Standard tools don't fit every master. At ApexCut, we customize blade length, tension, and ergonomics to match your specific grip. Experience the difference of a tool that's uniquely yours.
              </p>
              <Link to="/custom-order" className="bespoke-btn">
                Start Your Custom Build
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      {/* Social Grid Section */}
      <SocialGrid />
    </>
  )
}

export default Home

