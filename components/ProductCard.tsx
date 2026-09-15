"use client";

import Image from "next/image";
import { useState } from "react";

export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  amazonUrl?: string;
  isComingSoon?: boolean;
  tag?: string;
  subtitle?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

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
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        {product.subtitle && <p className="product-subtitle">{product.subtitle}</p>}

        {/* CTA: Exclusively Amazon Purchase (No Prices Displayed) */}
        <div className="product-action-row">
          {product.isComingSoon ? (
            <div className="coming-soon-pill">
              <span className="dot"></span>
              <span>Available Soon</span>
            </div>
          ) : (
            <a
              href={product.amazonUrl || "https://amzn.in/d/04SFVe10"}
              target="_blank"
              rel="noopener noreferrer"
              className="buy-amazon-btn"
              title={`Buy ${product.name} on Amazon`}
            >
              <span className="btn-text">Buy on Amazon</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="amz-icon">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h2v2h-2zm0-10h2v8h-2z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
