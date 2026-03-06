import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <span className="hero-tagline">Professional Grade Tools</span>
        <h1 className="hero-heading">Precision in Every Cut.</h1>
        <p className="hero-subheading">
          Crafted for master barbers and professional groomers. 
          Experience the difference of premium engineering.
        </p>
        <button className="hero-button">Shop Professional</button>
      </div>
      
      <div className="hero-decoration">
        <div className="hero-line"></div>
      </div>
    </section>
  )
}

export default Hero

