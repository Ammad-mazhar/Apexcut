import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Logo & About */}
          <div className="footer-col footer-about">
            <Link to="/" className="footer-logo">
              <img src="/logo/logo.png" alt="ApexCut Logo" className="footer-logo-image" />
            </Link>
            <p className="footer-about-text">
              Premium professional grooming tools crafted with Japanese precision. 
              Excellence in every cut since 2015.
            </p>
          </div>

          {/* Column 2: Shop Links */}
          <div className="footer-col">
            <h3 className="footer-heading">Shop</h3>
            <ul className="footer-links">
              <li>
                <Link to="/products/hair" className="footer-link">Hair Grooming</Link>
              </li>
              <li>
                <Link to="/products/pet" className="footer-link">Pet Grooming</Link>
              </li>
              <li>
                <Link to="/products/sets" className="footer-link">Sets & Bundles</Link>
              </li>
              <li>
                <Link to="/products/left-handed" className="footer-link">Left-Handed Shears</Link>
              </li>
              <li>
                <Link to="/products/thinning" className="footer-link">Thinning Shears</Link>
              </li>
              <li>
                <Link to="/custom-order" className="footer-link">Custom Orders</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Information Links */}
          <div className="footer-col">
            <h3 className="footer-heading">Information</h3>
            <ul className="footer-links">
              <li>
                <Link to="/shipping" className="footer-link">Shipping Info</Link>
              </li>
              <li>
                <Link to="/returns" className="footer-link">Returns & Exchanges</Link>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="footer-link">Terms of Service</Link>
              </li>
              <li>
                <Link to="/faq" className="footer-link">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-col">
            <h3 className="footer-heading">Newsletter</h3>
            <p className="footer-newsletter-text">
              Subscribe for exclusive offers and grooming tips.
            </p>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-newsletter-input"
                required
              />
              <button type="submit" className="footer-newsletter-btn">
                Join
              </button>
            </form>
          </div>

          {/* Column 5: Connect With Us */}
          <div className="footer-col footer-connect">
            <h3 className="footer-heading">Connect With Us</h3>
            <p className="footer-connect-text">
              Follow us for grooming tips, new arrivals, and style inspiration.
            </p>
            <div className="footer-social-icons">
              {/* TikTok - Larger with unique glow */}
              <a 
                href="https://tiktok.com/@apexcut" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link footer-social-tiktok"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a 
                href="https://instagram.com/apexcut" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a 
                href="https://facebook.com/apexcut" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/company/apexcut" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2026 ApexCut. All rights reserved.
            </p>
            <div className="footer-payment">
              <span className="footer-payment-label">We accept</span>
              <div className="footer-payment-icons">
                <svg className="payment-icon" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="38" height="24" rx="4" fill="#1A1F71"/>
                  <path d="M15.527 16.297H13.054L15.042 8.516H17.515L15.527 16.297Z" fill="white"/>
                  <path d="M22.484 16.361C22.213 16.584 21.801 16.71 21.389 16.71C20.729 16.71 20.259 16.332 20.259 15.734C20.259 14.975 20.884 14.643 21.497 14.447C22.074 14.26 22.558 14.082 22.558 13.633C22.558 13.265 22.175 12.987 21.692 12.987C21.153 12.987 20.747 13.274 20.468 13.595L20.138 13.303L19.908 15.169L22.484 15.169V16.361ZM23.413 16.297L21.536 10.328L21.224 11.131L21.461 12.087C21.692 11.676 22.175 11.265 22.954 11.265C23.305 11.265 23.656 11.389 23.656 11.887C23.656 12.439 23.041 12.651 22.428 12.838C21.851 13.016 21.331 13.203 21.331 13.67C21.331 14.101 21.732 14.387 22.241 14.387C22.832 14.387 23.278 14.073 23.584 13.688L23.868 14.009L23.413 16.297Z" fill="white"/>
                  <path d="M27.088 16.361C26.634 16.629 25.994 16.71 25.473 16.71C24.477 16.71 23.852 16.295 23.852 15.542C23.852 14.535 24.813 14.219 25.619 13.96L26.171 13.767C26.603 13.624 26.792 13.418 26.792 13.074C26.792 12.676 26.344 12.38 25.855 12.38C25.274 12.38 24.831 12.703 24.543 13.05L24.213 12.703L23.887 14.569L26.354 14.569V15.279C26.354 16.058 25.565 16.394 25.008 16.394C24.549 16.394 24.222 16.214 23.897 15.961L23.614 16.283L27.088 16.283V16.361Z" fill="white"/>
                  <path d="M13.923 9.541L13.593 10.765C13.375 10.423 12.938 10.172 12.474 10.172C11.821 10.172 11.323 10.612 11.323 11.311C11.323 11.959 11.803 12.371 12.367 12.371C12.93 12.371 13.329 12.05 13.611 11.676L13.895 12.015L13.923 9.541ZM30.164 10.172C29.474 10.172 28.929 10.567 28.766 11.131L28.674 11.456L28.738 11.702C29.092 11.238 29.667 10.875 30.318 10.875C30.753 10.875 31.043 11.067 31.043 11.494C31.043 11.949 30.554 12.197 30.082 12.197C29.538 12.197 29.148 11.903 28.92 11.585L28.664 11.894L28.378 13.741L28.64 13.438C28.866 13.78 29.338 14.111 29.962 14.111C30.548 14.111 30.947 13.78 30.947 13.265C30.947 12.794 30.503 12.492 30.041 12.492C29.542 12.492 29.161 12.786 28.933 13.104L28.677 12.795L28.065 15.225L28.337 14.916C28.582 15.267 29.072 15.607 29.716 15.607C30.375 15.607 30.801 15.221 30.801 14.67C30.801 14.191 30.421 13.898 29.96 13.898C29.461 13.898 29.107 14.192 28.878 14.51L29.217 14.147C29.481 14.533 29.953 14.828 30.548 14.828C31.279 14.828 31.741 14.415 31.741 13.855C31.741 13.339 31.315 13.01 30.844 13.01C30.364 13.01 30.013 13.321 29.785 13.639L30.164 10.172Z" fill="#F9A51A"/>
                  <path d="M33.537 16.297L31.68 10.328L31.368 11.131L31.605 12.087C31.836 11.676 32.319 11.265 33.098 11.265C33.449 11.265 33.8 11.389 33.8 11.887C33.8 12.439 33.185 12.651 32.572 12.838C31.995 13.016 31.475 13.203 31.475 13.67C31.475 14.101 31.876 14.387 32.385 14.387C32.976 14.387 33.422 14.073 33.728 13.688L34.012 14.009L33.537 16.297Z" fill="white"/>
                  <path d="M17.063 8.516L16.733 9.74C16.515 9.398 16.078 9.147 15.614 9.147C14.961 9.147 14.463 9.587 14.463 10.286C14.463 10.934 14.943 11.346 15.507 11.346C16.07 11.346 16.469 11.025 16.751 10.651L17.035 10.99L17.063 8.516Z" fill="#F9A51A"/>
                </svg>
                <svg className="payment-icon" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="38" height="24" rx="4" fill="#EB001B"/>
                  <circle cx="12" cy="12" r="8" fill="#EB001B"/>
                  <circle cx="26" cy="12" r="8" fill="#F79E1B"/>
                  <path d="M19 6.72C20.1 7.72 20.9 9.2 20.9 11.2C20.9 13.2 20.1 14.68 19 15.68C17.9 14.68 17.1 13.2 17.1 11.2C17.1 9.2 17.9 7.72 19 6.72Z" fill="#FF5F00"/>
                </svg>
                <svg className="payment-icon" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="38" height="24" rx="4" fill="#003087"/>
                  <path d="M12.1 15.29L13.41 11.74H16.05L14.3 15.5C13.8 16.32 13.19 16.83 12.36 16.83C11.92 16.83 11.59 16.71 11.21 16.46L11.37 16.65L12.1 15.29ZM14.96 13.64L14.15 11.74H11.65L10.77 13.87L10.62 14.26L10.67 14.29C11.23 14.68 11.98 14.9 12.79 14.9C13.68 14.9 14.43 14.52 14.96 13.64ZM26.79 13.34L26.59 13.54L25.54 12.31L24.9 13.13L24.72 13.31L24.9 13.58L26.22 15.28L26.38 15.17L27.91 13.22L28.02 13.08L28.12 13.22L29.41 15.19L29.58 15.05L30.88 13.07L30.96 12.9L30.99 12.93L29.58 15.28C29.06 16.14 28.32 16.71 27.36 16.71C26.7 16.71 26.14 16.44 25.75 15.94L25.88 16.14L24.42 15.1L24.52 15.24L23.15 14.04L22.87 14.42L22.79 14.53L22.92 14.69C23.48 15.33 24.33 15.71 25.26 15.71C26.28 15.71 27.1 15.16 27.49 14.24L27.55 14.11L27.48 14.03L26.79 13.34ZM19.59 11.74L17.8 15.57L17.71 15.75L17.77 15.78C18.26 16.13 18.9 16.36 19.59 16.36C21.28 16.36 22.75 15.13 23.27 13.54L21.53 11.74H19.59ZM20.35 13.73L21.35 14.91L21.45 14.84C21.69 14.6 21.77 14.25 21.77 13.82C21.77 12.78 20.97 12.08 20.06 12.08C19.49 12.08 19.03 12.37 18.77 12.83L18.86 12.91L17.87 14.13L17.97 14.22L18.33 14.64L18.52 14.86L18.65 14.53C18.93 13.99 19.51 13.63 20.19 13.63C20.83 13.63 21.31 13.93 21.31 14.53C21.31 14.73 21.23 14.92 21.08 15.07L21.18 15.15L20.35 13.73ZM10.38 16.71C9.51 16.71 8.83 16.17 8.83 15.37C8.83 14.55 9.51 14.02 10.38 14.02C11.25 14.02 11.92 14.55 11.92 15.37C11.92 16.17 11.25 16.71 10.38 16.71ZM10.38 15.18C10.05 15.18 9.8 14.96 9.8 14.57C9.8 14.18 10.05 13.95 10.38 13.95C10.71 13.95 10.96 14.18 10.96 14.57C10.96 14.96 10.71 15.18 10.38 15.18Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

