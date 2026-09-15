"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import NewsBlog from "@/components/NewsBlog";
import InstagramFeed from "@/components/InstagramFeed";
import { ALL_PRODUCTS } from "@/data/products";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const categories = [
    { id: "ALL", label: "All Products" },
    { id: "PET CARE", label: "Coat & Skin Care" },
    { id: "SPOT ON CARE", label: "Parasite & Spot-On" },
    { id: "MEDICATED", label: "Medicated Care" },
    { id: "DAILY CARE", label: "Daily Grooming" }
  ];

  const filteredProducts =
    selectedCategory === "ALL"
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Navbar />

      <main className="main-content">
        {/* Shop Hero Banner */}
        <section className="shop-hero-section">
          <div className="container">
            <div className="shop-hero-inner">
              <span className="hero-pill-tag">WUNPLE CATALOG</span>
              <h1 className="shop-hero-title">The friendly and caring pet store</h1>
              <p className="shop-hero-subtitle">
                Explore our carefully crafted pet wellness formulas. All items are delivered with Amazon Prime reliability and pet-safe purity guarantees.
              </p>
            </div>
          </div>
        </section>

        {/* Shop Catalog Layout */}
        <section className="section-padding bg-light">
          <div className="container">
            {/* Category Filter Tabs */}
            <div className="category-tabs-wrapper">
              <div className="category-tabs">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    className={`cat-pill-btn ${selectedCategory === cat.id ? "active" : ""}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              <span className="products-count-badge">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
              </span>
            </div>

            {/* Products Grid */}
            <div className="products-grid shop-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Amazon Direct Guarantee Banner */}
            <div className="amazon-trust-banner">
              <div className="trust-banner-content">
                <span className="trust-badge-amz">📦 DIRECT VIA AMAZON</span>
                <h3>Safe Payments, Free Prime Delivery &amp; Easy Returns</h3>
                <p>
                  To provide you with the fastest delivery across India, genuine batch tracking, and hassle-free returns, all Wunple orders are exclusively fulfilled through Amazon India.
                </p>
              </div>
              <a
                href="https://amzn.in/d/04SFVe10"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit Amazon Storefront ↗
              </a>
            </div>
          </div>
        </section>

        {/* News & Blog */}
        <NewsBlog />

        {/* Instagram Feed */}
        <InstagramFeed />
      </main>

      <Footer />
    </>
  );
}
