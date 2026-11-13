"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import NewsBlog from "@/components/NewsBlog";
import InstagramFeed from "@/components/InstagramFeed";
import { ALL_PRODUCTS, Product } from "@/data/products";

export default function ProductsCataloguePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    { id: "ALL", label: "All Products" },
    { id: "PET CARE", label: "Grooming & Shampoos" },
    { id: "SPOT ON CARE", label: "Spot-On Parasite Care" },
    { id: "ANTISEPTIC SPRAYS", label: "Antiseptic Sprays" },
    { id: "ORAL CARE & ANTIBIOTICS", label: "Oral Antibiotics" },
    { id: "ORAL SUSPENSION", label: "Oral Suspensions" }
  ];

  const filteredProducts =
    selectedCategory === "ALL"
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <>
      <Navbar />

      <main className="main-content">
        {/* Products Hero Banner */}
        <section className="shop-hero-section">
          <div className="container">
            <div className="shop-hero-inner">
              <span className="hero-pill-tag">WUNPLE VETERINARY &amp; PET CARE</span>
              <h1 className="shop-hero-title">The Complete Wunple Product Range</h1>
              <p className="shop-hero-subtitle">
                Explore veterinary-assessed pet health formulations, medicated shampoos, topical spot-on treatments, and oral suspensions for happier, healthier dogs and cats.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Catalogue Spotlight: Selamide Spot On & WUNCEF */}
        <section className="spotlight-section">
          <div className="container">
            <div className="spotlight-grid">
              {/* Selamide Spotlight */}
              <div className="spotlight-card spotlight-cat">
                <div className="spotlight-badge">SPOTLIGHT: CAT CARE</div>
                <div className="spotlight-content">
                  <h2>Selamide Spot On</h2>
                  <p>
                    Focused Selamectin 6% topical protection against fleas, ear mites, roundworms, hookworms, and heartworm disease for cats &amp; kittens.
                  </p>
                  <div className="spotlight-tags">
                    <span>🐱 Cats &amp; Kittens</span>
                    <span>💧 0.5 ml Pipette</span>
                    <span>⚡ Fast-Drying</span>
                  </div>
                  <div className="spotlight-actions">
                    <a
                      href="https://amzn.in/d/0iZx5H5E"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-spotlight-amz"
                    >
                      Buy on Amazon ↗
                    </a>
                    <Link href="/products/selamide-spot-on" className="btn-spotlight-link">
                      View Details →
                    </Link>
                  </div>
                </div>
                <div className="spotlight-media">
                  <Image
                    src="/images/banner-selamide.jpg"
                    alt="Selamide Spot On with Cat"
                    width={480}
                    height={220}
                    className="spotlight-img"
                  />
                </div>
              </div>

              {/* WUNCEF Spotlight */}
              <div className="spotlight-card spotlight-pharma">
                <div className="spotlight-badge">NEW LAUNCH: PHARMA</div>
                <div className="spotlight-content">
                  <h2>WUNCEF® Dry Syrup</h2>
                  <p>
                    Third-generation Cephalosporin Cefpodoxime Proxetil (100 mg / 30 ml) for UTI, superficial pyoderma, and bacterial infections in dogs and cats.
                  </p>
                  <div className="spotlight-tags">
                    <span>🐶 🐱 Dogs &amp; Cats</span>
                    <span>💊 100 mg / 30 ml</span>
                    <span>🔬 Broad-Spectrum</span>
                  </div>
                  <div className="spotlight-actions">
                    <a
                      href="https://wa.me/917718894017?text=Hello%20Wunple%2C%20I%20would%20like%20to%20order%20WUNCEF%20Dry%20Syrup."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-spotlight-order"
                    >
                      Contact Us for Order 💬
                    </a>
                    <Link href="/products/wuncef-dry-syrup" className="btn-spotlight-link">
                      View Details →
                    </Link>
                  </div>
                </div>
                <div className="spotlight-media">
                  <Image
                    src="/images/banner-wuncef.jpg"
                    alt="WUNCEF Dry Syrup"
                    width={480}
                    height={220}
                    className="spotlight-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Catalog Section with Tabs */}
        <section className="section-padding bg-light" id="catalogue">
          <div className="container">
            <div className="section-header-centered">
              <span className="section-subtitle">Categorized Product Line</span>
              <h2 className="section-title">Product Catalogue</h2>
              <p className="section-desc">
                Browse our complete formulations. Click any product for clinical indications, compositions, and ordering details.
              </p>
            </div>

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

            {/* Veterinary Ordering & Inquiries Notice Banner */}
            <div className="catalogue-inquiry-box">
              <div className="catalogue-inquiry-text">
                <h3>Veterinary Clinics &amp; Bulk Institutional Inquiries</h3>
                <p>
                  Looking for veterinary product supply, clinical datasheets, or distribution inquiries for WUNCEF, PORXOLYN, CHLOX, or SELAMIDE? Our veterinary liaison team is here to assist.
                </p>
              </div>
              <div className="catalogue-inquiry-actions">
                <a
                  href="https://wa.me/917718894017?text=Hello%20Wunple%2C%20I%20am%20a%20veterinarian%2Fretailer%20inquiring%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-inquiry-wa"
                >
                  Inquire on WhatsApp 💬
                </a>
                <Link href="/contact" className="btn-inquiry-contact">
                  Send Inquiry Form →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <NewsBlog />
        <InstagramFeed />
      </main>

      <Footer />
    </>
  );
}

