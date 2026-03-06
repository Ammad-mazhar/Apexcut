import './InfoPage.css'

function Shipping() {
  return (
    <div className="info-page">
      <section className="info-hero">
        <div className="info-hero-overlay"></div>
        <div className="info-hero-content">
          <span className="info-hero-tagline">Delivery Information</span>
          <h1 className="info-hero-heading">Shipping & Delivery</h1>
        </div>
      </section>

      <section className="info-content">
        <div className="info-container">
          <div className="info-text">
            <h2>Our Shipping Promise</h2>
            <p>
              At ApexCut, we understand that when you invest in professional grooming tools, you want them in your hands as quickly as possible. That's why we offer fast, reliable shipping on all orders.
            </p>

            <h3>Shipping Times</h3>
            <ul className="info-list">
              <li><strong>Standard Shipping:</strong> 5-7 business days</li>
              <li><strong>Express Shipping:</strong> 2-3 business days</li>
              <li><strong>Priority Shipping:</strong> 1-2 business days</li>
              <li><strong>International Shipping:</strong> 10-21 business days</li>
            </ul>

            <h3>Free Shipping</h3>
            <p>
              Enjoy complimentary standard shipping on all orders over $150. For orders under $150, a flat shipping fee of $9.99 applies.
            </p>

            <h3>Order Processing</h3>
            <p>
              All orders are processed within 1-2 business days. You'll receive a confirmation email with tracking information once your order ships.
            </p>

            <h3>International Shipping</h3>
            <p>
              We ship to over 50 countries worldwide. International orders may be subject to customs duties and taxes, which are the responsibility of the recipient.
            </p>

            <h3>Tracking Your Order</h3>
            <p>
              Once your order ships, you'll receive an email with a tracking number. You can track your package directly through our website or the carrier's website.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shipping

