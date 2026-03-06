import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    name: 'Marcus Chen',
    title: 'Master Barber',
    location: 'Los Angeles, CA',
    quote: 'After 20 years behind the chair, I finally found shears that exceed my expectations. The balance and sharpness are unparalleled. These are not just tools—they are an extension of my craft.',
    verified: true
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    title: 'Professional Pet Groomer',
    location: 'Austin, TX',
    quote: 'The curved pet shears have transformed my grooming business. My poodle clients have never looked better, and the ergonomic design means I can work full days without fatigue. Worth every penny.',
    verified: true
  },
  {
    id: 3,
    name: 'James Rodriguez',
    title: 'Master Barber',
    location: 'New York, NY',
    quote: 'I have tried dozens of premium shears over my career. ApexCut delivers the precision and durability that top-tier professionals demand. A game-changer for precision cutting techniques.',
    verified: true
  }
]

function StarRating() {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i}
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="#d4af37"
          stroke="#d4af37"
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      {testimonial.verified && (
        <span className="verified-badge">Verified Purchase</span>
      )}
      
      <StarRating />
      
      <blockquote className="testimonial-quote">
        "{testimonial.quote}"
      </blockquote>
      
      <div className="testimonial-author">
        <h4 className="author-name">{testimonial.name}</h4>
        <p className="author-title">{testimonial.title}</p>
        <p className="author-location">{testimonial.location}</p>
      </div>
    </div>
  )
}

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span className="testimonials-label">Testimonials</span>
          <h2 className="testimonials-title">Trusted by Professionals</h2>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

