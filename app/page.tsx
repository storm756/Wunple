import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import NewsBlog from "@/components/NewsBlog";
import { ALL_PRODUCTS, BEST_SELLERS } from "@/data/products";
import Image from "next/image";

export default function Home() {
  const amazonStoreUrl = "https://amzn.in/d/04SFVe10";

  return (
    <>
      {/* Seamless Hero Wrapper matching Reference Image */}
      <div className="home-hero-wrapper">
        <Navbar />

        <section className="hero-section">
          <div className="container hero-container">
            {/* Left Hero Copy */}
            <div className="hero-copy">
              <span className="hero-badge">PET CARE</span>
              <h1 className="hero-title">
                Everything your pet<br />
                needs, all in one<br />
                place.
              </h1>
              <p className="hero-description">
                Thoughtfully made pet-care essentials for happier, healthier dogs and cats. From everyday grooming to targeted care, Wunple is here for every part of your pet-parenting journey.
              </p>
              <div className="hero-actions">
                <a
                  href={amazonStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shop-now"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="main-content">
        {/* Best Selling Products Section */}
        <section className="section-padding bg-light" id="bestsellers">
          <div className="container">
            <div className="section-header-centered">
              <span className="section-subtitle">Top Customer Favorites</span>
              <h2 className="section-title">Best Selling Products</h2>
            </div>

            <div className="products-grid best-sellers-grid">
              {BEST_SELLERS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Promo Split Banner (Bathing Corgi + Royal Blue Card) */}
        <section className="promo-banner-section">
          <div className="promo-banner-container">
            {/* Left Half: Corgi in Bath */}
            <div className="promo-image-col">
              <Image
                src="/images/corgi-bath.png"
                alt="Happy corgi taking a bubble bath with suds"
                fill
                className="promo-cover-img"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>

            {/* Right Half: Royal Blue Promo Card */}
            <div className="promo-content-col">
              <span className="promo-tag">THE WUNPLE PROMISE</span>
              <h2 className="promo-title">
                The smarter way to shop<br />
                for your pet
              </h2>
              <p className="promo-desc">
                Thoughtfully crafted products designed to keep tails wagging, skin soothed, and coats shining. Formulated with gentle ingredients and high clinical safety standards.
              </p>
              <div className="promo-actions">
                <Link href="/about" className="btn-promo-light">
                  Learn More
                </Link>
                <a
                  href={amazonStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-promo-outline"
                >
                  Visit Amazon Store ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Products Section (Complete 5-item grid) */}
        <section className="section-padding" id="products">
          <div className="container">
            <div className="section-header-centered">
              <span className="section-subtitle">Carefully Formulated</span>
              <h2 className="section-title">Our Products</h2>
              <p className="section-desc">
                Browse our complete line of pet grooming solutions and targeted spot-on care. Available for direct purchase on Amazon with prime delivery.
              </p>
            </div>

            <div className="products-grid our-products-grid">
              {ALL_PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Real Customer Stories / Testimonials */}
        <Testimonials />

        {/* News & Blog */}
        <NewsBlog />

        {/* Instagram Feed Integration */}
        <InstagramFeed />
      </main>

      <Footer />
    </>
  );
}
