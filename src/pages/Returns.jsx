import './InfoPage.css'

function Returns() {
  return (
    <div className="info-page">
      <section className="info-hero">
        <div className="info-hero-overlay"></div>
        <div className="info-hero-content">
          <span className="info-hero-tagline">Satisfaction Guarantee</span>
          <h1 className="info-hero-heading">Returns & Exchanges</h1>
        </div>
      </section>

      <section className="info-content">
        <div className="info-container">
          <div className="info-text">
            <h2>Our Return Policy</h2>
            <p>
              We want you to be completely satisfied with your ApexCut tools. If for any reason you're not happy with your purchase, we offer a hassle-free return policy.
            </p>

            <h3>30-Day Returns</h3>
            <p>
              You may return any unused product in its original condition within 30 days of purchase for a full refund. We'll even cover the return shipping for orders within the continental US.
            </p>

            <h3>How to Return</h3>
            <ul className="info-list">
              <li>Contact our customer service team to request a return authorization</li>
              <li>Package the item securely in its original packaging</li>
              <li>Include your order number and return authorization form</li>
              <li>Ship the package using a tracked shipping method</li>
            </ul>

            <h3>Refunds</h3>
            <p>
              Once we receive your return, we'll process your refund within 5-7 business days. The refund will be credited to your original payment method. You'l receive an email confirmation once the refund is processed.
            </p>

            <h3>Exchanges</h3>
            <p>
              If you'd like to exchange a product for a different size or model, simply return the original item and place a new order. This ensures you receive your new product as quickly as possible.
            </p>

            <h3>Non-Returnable Items</h3>
            <ul className="info-list">
              <li>Products that have been used or show signs of use</li>
              <li>Products that have been customized or personalized</li>
              <li>Gift cards</li>
              <li>Sale items (unless defective)</li>
            </ul>

            <h3>Defective Products</h3>
            <p>
              If you receive a defective product, please contact us immediately. We'll arrange for a replacement or refund at no additional cost. We stand behind the quality of our products with a lifetime warranty against manufacturing defects.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Returns

