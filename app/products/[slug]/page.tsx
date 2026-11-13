import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ALL_PRODUCTS, Product } from "@/data/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_PRODUCTS.map((prod) => ({
    slug: prod.id
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = ALL_PRODUCTS.find((p) => p.id === slug);

  if (!product) {
    return {
      title: "Product Not Found | Wunple"
    };
  }

  return {
    title: `${product.name} | Wunple Pet Care`,
    description: product.subtitle || `Detailed clinical and usage information for ${product.name}.`
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = ALL_PRODUCTS.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/917718894017?text=${encodeURIComponent(
    `Hello Wunple, I would like to order / inquire about ${product.name} (${product.packSize || ""}).`
  )}`;

  return (
    <>
      <Navbar />

      <main className="main-content product-detail-main">
        {/* Breadcrumb Header */}
        <div className="product-breadcrumb-bar">
          <div className="container">
            <div className="article-breadcrumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/products">Products</Link>
              <span>/</span>
              <span className="current-crumb">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Hero Section */}
        <section className="product-detail-hero">
          <div className="container">
            <div className="product-hero-layout">
              {/* Product Visual Gallery / Box */}
              <div className="product-hero-media">
                <div className="product-hero-image-card">
                  <Image
                    src={product.bannerImage || product.image}
                    alt={product.name}
                    width={700}
                    height={400}
                    priority
                    className="product-hero-main-img"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                {product.bannerImage && (
                  <div className="product-thumbnail-row">
                    <div className="thumbnail-box active">
                      <Image
                        src={product.image}
                        alt={`${product.name} pack`}
                        width={120}
                        height={120}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Product Overview & Actions */}
              <div className="product-hero-info">
                <span className="product-category-tag">{product.category}</span>
                <h1 className="product-detail-title">{product.name}</h1>
                {product.subtitle && (
                  <p className="product-detail-lead">{product.subtitle}</p>
                )}

                {/* Key Quick Specs Table */}
                <div className="product-specs-table">
                  {product.composition && (
                    <div className="spec-row">
                      <span className="spec-label">Composition:</span>
                      <strong className="spec-value">{product.composition}</strong>
                    </div>
                  )}
                  {product.strength && (
                    <div className="spec-row">
                      <span className="spec-label">Strength:</span>
                      <strong className="spec-value">{product.strength}</strong>
                    </div>
                  )}
                  {product.dosageForm && (
                    <div className="spec-row">
                      <span className="spec-label">Dosage Form:</span>
                      <strong className="spec-value">{product.dosageForm}</strong>
                    </div>
                  )}
                  {product.packSize && (
                    <div className="spec-row">
                      <span className="spec-label">Pack Size:</span>
                      <strong className="spec-value">{product.packSize}</strong>
                    </div>
                  )}
                  {product.species && (
                    <div className="spec-row">
                      <span className="spec-label">Target Species:</span>
                      <strong className="spec-value">{product.species}</strong>
                    </div>
                  )}
                </div>

                {/* CTA Action Row */}
                <div className="product-detail-actions">
                  {product.contactOrder || !product.amazonUrl ? (
                    <div className="order-actions-group">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-order-wa"
                      >
                        <span>Contact Us for Order</span>
                        <span className="btn-icon">💬</span>
                      </a>
                      <a href="tel:+917718894017" className="btn-order-call">
                        <span>Call +91 7718894017</span>
                        <span className="btn-icon">📞</span>
                      </a>
                    </div>
                  ) : (
                    <div className="order-actions-group">
                      <a
                        href={product.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-order-amz"
                      >
                        <span>Buy on Amazon</span>
                        <span className="btn-icon">🛍️</span>
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-order-wa-secondary"
                      >
                        <span>Order Directly on WhatsApp</span>
                      </a>
                    </div>
                  )}
                </div>

                <div className="veterinary-note-box">
                  <span className="note-icon">ℹ️</span>
                  <span>
                    Use according to veterinary assessment and bacterial susceptibility. Formulated with pet-safe clinical standards.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Sections: Indications & Key Features */}
        <section className="section-padding bg-light">
          <div className="container">
            <div className="product-details-grid">
              {/* Indications */}
              {product.indications && (
                <div className="detail-card">
                  <h3 className="detail-card-title">Therapeutic Indications &amp; Uses</h3>
                  <p className="detail-card-desc">
                    Recommended for the management of the following conditions under veterinary guidance:
                  </p>
                  <ul className="detail-checklist">
                    {product.indications.map((ind, i) => (
                      <li key={i}>
                        <span className="check-bullet">✓</span>
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Features & Benefits */}
              {product.keyFeatures && (
                <div className="detail-card">
                  <h3 className="detail-card-title">Why Choose {product.name}?</h3>
                  <p className="detail-card-desc">
                    Engineered for high therapeutic efficacy, safety, and ease of administration:
                  </p>
                  <ul className="detail-checklist">
                    {product.keyFeatures.map((feat, i) => (
                      <li key={i}>
                        <span className="check-bullet">★</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Back link */}
            <div className="back-link-center">
              <Link href="/products" className="btn-back-catalogue">
                ← Back to Full Product Catalogue
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

