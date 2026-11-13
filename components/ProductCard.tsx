"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const whatsappOrderUrl = `https://wa.me/917718894017?text=${encodeURIComponent(
    `Hello Wunple, I would like to order ${product.name} (${product.packSize || ""}).`
  )}`;

  return (
    <article className={`product-card ${product.isComingSoon ? "coming-soon" : ""}`}>
      {/* Product Image Container */}
      <div className="product-image-box">
        {/* Category / Status Badge */}
        <span className={`product-badge ${product.isComingSoon ? "badge-soon" : "badge-active"}`}>
          {product.isComingSoon ? "COMING SOON" : product.category}
        </span>

        {/* Wishlist Heart Button */}
        <button
          type="button"
          className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
          onClick={() => setIsWishlisted(!isWishlisted)}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          title={isWishlisted ? "Wishlisted" : "Save to wishlist"}
        >
          {isWishlisted ? "❤️" : "♡"}
        </button>

        {/* Product Visual */}
        <Link href={`/products/${product.id}`} className="product-visual-link">
          <div className="product-visual">
            <Image
              src={product.image}
              alt={product.name}
              width={280}
              height={260}
              className="product-img"
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-title">
          <Link href={`/products/${product.id}`}>{product.name}</Link>
        </h3>
        {product.subtitle && <p className="product-subtitle">{product.subtitle}</p>}

        {/* CTA: Exclusively Amazon Purchase OR Contact Us For Order (No ! icon, brand blue) */}
        <div className="product-action-row">
          {product.isComingSoon ? (
            <div className="coming-soon-pill">
              <span className="dot"></span>
              <span>Available Soon</span>
            </div>
          ) : product.contactOrder || !product.amazonUrl ? (
            <a
              href={whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="buy-amazon-btn btn-contact-order"
              title={`Contact Us for Order - ${product.name}`}
            >
              <span className="btn-text">Contact Us for Order</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </a>
          ) : (
            <a
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="buy-amazon-btn"
              title={`Buy ${product.name} on Amazon`}
            >
              <span className="btn-text">Buy on Amazon</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
