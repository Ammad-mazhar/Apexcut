import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! Our team will contact you shortly.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <span className="contact-hero-tagline">Get In Touch</span>
          <h1 className="contact-hero-heading">We're Here to Help</h1>
          <p className="contact-hero-subheading">
            Reach out to our elite support team
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Left Side - Contact Info */}
            <div className="contact-info">
              <span className="contact-section-label">Contact Information</span>
              <h2 className="contact-info-title">Connect With Us</h2>
              <p className="contact-info-text">
                Our dedicated support team is available to assist you with any questions about our products, orders, or customization requests.
              </p>

              <div className="contact-details">
                {/* Address */}
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="contact-detail-content">
                    <h3 className="contact-detail-title">Visit Our Studio</h3>
                    <p className="contact-detail-text">
                      123 Precision Way<br />
                      Artisan District<br />
                      Tokyo, Japan 150-0001
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="contact-detail-content">
                    <h3 className="contact-detail-title">VIP Support Email</h3>
                    <p className="contact-detail-text">
                      <a href="mailto:vip@apexcut.com">vip@apexcut.com</a>
                    </p>
                    <span className="contact-detail-note">We respond within 24 hours</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="contact-detail-content">
                    <h3 className="contact-detail-title">WhatsApp for Business</h3>
                    <p className="contact-detail-text">
                      <a href="https://wa.me/81312345678">+81 3-1234-5678</a>
                    </p>
                    <span className="contact-detail-note">Available 9AM - 6PM JST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className="contact-form-title">Send Us a Message</h2>
                
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input form-select"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="order-support">Order Support</option>
                    <option value="custom-order">Custom Order Request</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input form-textarea"
                    placeholder="Tell us about your inquiry..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="contact-map">
        <div className="contact-map-container">
          <span className="contact-section-label">Find Us</span>
          <h2 className="contact-map-title">Our Location</h2>
          <div className="contact-map-wrapper">
            {/* Google Maps Embed Placeholder - Dark Mode Style */}
            <iframe
              title="ApexCut Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853402431!2d139.6918682!3d35.6894875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd4b6033c91%3A0x5d4c6c6b7d9c7c91!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sus!4v1635789012345!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Shortcut Section */}
      <section className="contact-faq">
        <div className="contact-faq-container">
          <div className="contact-faq-content">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="contact-faq-icon">
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <p className="contact-faq-text">Need a quick answer? Check our FAQ</p>
            <a href="/faq" className="contact-faq-link">Visit FAQ</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

