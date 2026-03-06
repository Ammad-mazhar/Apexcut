import './InfoPage.css'

function Privacy() {
  return (
    <div className="info-page">
      <section className="info-hero">
        <div className="info-hero-overlay"></div>
        <div className="info-hero-content">
          <span className="info-hero-tagline">Your Data Matters</span>
          <h1 className="info-hero-heading">Privacy Policy</h1>
        </div>
      </section>

      <section className="info-content">
        <div className="info-container">
          <div className="info-text">
            <h2>Your Privacy Matters</h2>
            <p>
              At ApexCut, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information.
            </p>

            <h3>Information We Collect</h3>
            <ul className="info-list">
              <li><strong>Personal Information:</strong> Name, email address, phone number, shipping address</li>
              <li><strong>Payment Information:</strong> Credit card details (processed securely through our payment partners)</li>
              <li><strong>Account Information:</strong> Username, password, order history</li>
              <li><strong>Usage Data:</strong> Browsing behavior, interaction with our website</li>
            </ul>

            <h3>How We Use Your Information</h3>
            <ul className="info-list">
              <li>Processing and fulfilling your orders</li>
              <li>Communicating with you about your orders</li>
              <li>Providing customer support</li>
              <li>Sending promotional emails (with your consent)</li>
              <li>Improving our products and services</li>
              <li>Preventing fraud and ensuring security</li>
            </ul>

            <h3>Data Protection</h3>
            <p>
              We implement industry-standard security measures to protect your personal information. All data is encrypted using SSL technology and stored on secure servers. We never sell your personal information to third parties.
            </p>

            <h3>Cookies</h3>
            <p>
              Our website uses cookies to enhance your browsing experience. Cookies help us remember your preferences, analyze traffic, and improve our website functionality. You can disable cookies in your browser settings, but this may affect some features of our site.
            </p>

            <h3>Third-Party Services</h3>
            <p>
              We work with trusted third-party service providers for payment processing, shipping, and marketing. These partners are contractually obligated to protect your information and only use it for the services they provide.
            </p>

            <h3>Your Rights</h3>
            <ul className="info-list">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data portability</li>
            </ul>

            <h3>Contact Us</h3>
            <p>
              If you have any questions about our Privacy Policy or want to exercise your rights, please contact us at vip@apexcut.com.
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

export default Privacy

