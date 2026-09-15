"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <>
      {/* Top Notification / Contact Bar (Transparent over cyan hero) */}
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <a href="tel:+917718894017" className="contact-item">
              <span className="icon">📞</span>
              <span>+91 7718894017</span>
            </a>
            <a href="mailto:wunple01@gmail.com" className="contact-item">
              <span className="icon">✉️</span>
              <span>wunple01@gmail.com</span>
            </a>
          </div>
          <div className="top-bar-right">
            <span className="icon">📍</span>
            <span>Navi Mumbai - 410206</span>
          </div>
        </div>
      </div>

      {/* Main Floating Pill Navbar */}
      <header className="navbar-wrapper">
        <nav className="navbar">
          {/* Logo */}
          <Link href="/" className="nav-logo">
            <span className="brand-text">Wunple</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="nav-links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-link ${isActive ? "active" : ""}`}
                >
                  {link.name}
                  {isActive && <span className="active-line" />}
                </Link>
              );
            })}
          </div>

          {/* Search Input with Circular Search Icon Button */}
          <div className="nav-search">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search products"
            />
            <button type="button" className="search-circle-btn" aria-label="Submit search">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>

          {/* Actions: Wishlist & Amazon Cart with '0' Badges */}
          <div className="nav-actions">
            <Link href="/shop" className="action-icon-btn" title="Wishlist" aria-label="Wishlist">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.8">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              <span className="icon-badge">0</span>
            </Link>

            <a
              href="https://amzn.in/d/04SFVe10"
              target="_blank"
              rel="noopener noreferrer"
              className="action-icon-btn"
              title="Shop Wunple on Amazon"
              aria-label="Amazon Cart"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="1.8">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <span className="icon-badge">0</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-search">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="mobile-links">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`mobile-link ${pathname === link.href ? "active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://amzn.in/d/04SFVe10"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-amz-cta"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop on Amazon 🛍️
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
