import './InfoPage.css'

function Terms() {
  return (
    <div className="info-page">
      <section className="info-hero">
        <div className="info-hero-overlay"></div>
        <div className="info-hero-content">
          <span className="info-hero-tagline">Legal Agreement</span>
          <h1 className="info-hero-heading">Terms of Service</h1>
        </div>
      </section>

      <section className="info-content">
        <div className="info-container">
          <div className="info-text">
            <h2>Terms of Service</h2>
            <p>
              Welcome to ApexCut. By accessing and purchasing from our website, you agree to be bound by these Terms of Service. Please read them carefully before using our site.
            </p>

            <h3>Using Our Website</h3>
            <p>
              You agree to use this website only for lawful purposes and in a manner that does not infringe on the rights of others. You must not use our website in any way that could damage, disable, or impair the site.
            </p>

            <h3>Account Responsibilities</h3>
            <p>
              If you create an account on our website, you are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.
            </p>

            <h3>Orders & Pricing</h3>
            <p>
              All orders are subject to availability and confirmation of the order price. We reserve the right to refuse or cancel any order for any reason, including pricing errors or product availability.
            </p>
            <ul className="info-list">
              <li>All prices are in USD unless otherwise specified</li>
              <li>Shipping costs are calculated at checkout</li>
              <li>Taxes are applied based on shipping address</li>
              <li>We reserve the right to modify prices at any time</li>
            </ul>

            <h3>Product Descriptions</h3>
            <p>
              We strive to provide accurate product descriptions and images. However, we cannot guarantee that all product descriptions are error-free. If you receive a product that differs significantly from the description, you may return it for a full refund.
            </p>

            <h3>Intellectual Property</h3>
            <p>
              All content on this website, including images, logos, text, and product designs, is the property of ApexCut and is protected by copyright and trademark laws. You may not reproduce, distribute, or modify any content without our written permission.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              ApexCut shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or products. Our total liability is limited to the purchase price of the product in question.
            </p>

            <h3>Warranty</h3>
            <p>
              All ApexCut products come with a lifetime warranty against manufacturing defects. This warranty does not cover damage caused by misuse, improper care, or normal wear and tear.
            </p>

            <h3>Governing Law</h3>
            <p>
              These Terms of Service are governed by the laws of Japan. Any disputes arising from these terms will be resolved in the courts of Tokyo, Japan.
            </p>

            <h3>Changes to Terms</h3>
            <p>
              We reserve the right to modify these Terms of Service at any time. Your continued use of our website after any changes constitutes acceptance of the new terms.
            </p>

            <p className="info-updated">
              Last updated: January 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms

