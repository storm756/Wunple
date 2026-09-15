import Link from "next/link";

export default function Footer() {
  const instagramUrl = "https://www.instagram.com/wunple_care?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";
  const amazonStoreUrl = "https://amzn.in/d/04SFVe10";

  return (
    <footer className="site-footer">
      {/* Decorative Paw Accents */}
      <div className="paw-decorations" aria-hidden="true">
        <span>🐾</span>
        <span>🐾</span>
        <span>🐾</span>
        <span>🐾</span>
        <span>🐾</span>
      </div>

      <div className="footer-container">
        {/* Brand Summary */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <span className="brand-name">Wunple</span>
            <span className="brand-dot">.</span>
          </Link>
          <strong className="brand-tagline">Better care. Happier pets.</strong>
          <p className="brand-desc">
            Thoughtfully made pet-care essentials for the companions who make life better. Made with pet-safe, gentle, and effective formulas.
          </p>

          <div className="social-links">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Follow Wunple on Instagram"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Follow Wunple on Facebook"
              aria-label="Facebook"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="Follow Wunple on Twitter"
              aria-label="Twitter"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Company</h4>
          <ul className="footer-list">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/shop">All Products</Link></li>
            <li><Link href="/#blog">News & Blog</Link></li>
            <li><Link href="/contact">Contact Support</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Useful Links</h4>
          <ul className="footer-list">
            <li><a href={amazonStoreUrl} target="_blank" rel="noopener noreferrer">Coat Ease Shampoo</a></li>
            <li><a href={amazonStoreUrl} target="_blank" rel="noopener noreferrer">Itch Relief Shampoo</a></li>
            <li><a href={amazonStoreUrl} target="_blank" rel="noopener noreferrer">Selamide Spot On</a></li>
            <li><a href={amazonStoreUrl} target="_blank" rel="noopener noreferrer">Amazon Storefront</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer-col">
          <h4 className="footer-heading">Customer Service</h4>
          <ul className="footer-list">
            <li><Link href="/contact">Contact Us</Link></li>
            <li><a href={amazonStoreUrl} target="_blank" rel="noopener noreferrer">Order Tracking (Amazon)</a></li>
            <li><a href={amazonStoreUrl} target="_blank" rel="noopener noreferrer">Returns & Refunds</a></li>
            <li><Link href="/contact">Enquiries & Help</Link></li>
          </ul>
        </div>

        {/* Address & Direct Contact */}
        <div className="footer-col footer-address-col">
          <h4 className="footer-heading">Address</h4>
          <div className="address-details">
            <p className="entity-name"><strong>MJ Enterprises</strong></p>
            <p>office no-4, Wangad building plot no-115, sector-19, ulwe, Navi Mumbai – 410206</p>
            <p className="contact-line">
              <strong>Phone:</strong> <a href="tel:+917718894017">+91 7718894017</a>
            </p>
            <p className="contact-line">
              <strong>Email:</strong> <a href="mailto:wunple01@gmail.com">wunple01@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© {new Date().getFullYear()} Wunple Pet Care (MJ Enterprises). All rights reserved.</p>
          <div className="footer-badges">
            <span className="badge-pill">🐾 Pet Safe</span>
            <span className="badge-pill">🌿 Gentle Care</span>
            <span className="badge-pill">📦 Amazon Prime Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
