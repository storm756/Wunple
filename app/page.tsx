import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import NewsBlog from "@/components/NewsBlog";
import SlidingBanner from "@/components/SlidingBanner";
import { ALL_PRODUCTS, BEST_SELLERS } from "@/data/products";

export default function Home() {
  const amazonStoreUrl = "https://amzn.in/d/04SFVe10";

  return (
    <>
      <Navbar />

      {/* Main Homepage Hero: Responsive Sliding Banner Carousel */}
      <SlidingBanner />

      <main className="main-content">
        {/* Best Selling Products Section */}
        <section className="section-padding bg-light" id="bestsellers">
          <div className="container">
            <div className="section-header-centered">
              <span className="section-subtitle">Top Customer Favorites</span>
              <h2 className="section-title">Best Selling Products</h2>
              <p className="section-desc">
                Clinically tested and trusted by pet parents across India for sensitive coats, parasite defense, and wellness.
              </p>
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
                The smarter way to care<br />
                for your pets
              </h2>
              <p className="promo-desc">
                Thoughtfully crafted products designed to keep tails wagging, skin soothed, and coats shining. Formulated with gentle botanicals and high veterinary pharmaceutical safety standards.
              </p>
              <div className="promo-actions">
                <Link href="/about" className="btn-promo-light">
                  Learn More
                </Link>
                <Link href="/products" className="btn-promo-outline">
                  View Full Catalogue →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Product Range Section */}
        <section className="section-padding" id="products">
          <div className="container">
            <div className="section-header-centered">
              <span className="section-subtitle">Comprehensive Healthcare Range</span>
              <h2 className="section-title">Our Products &amp; Formulations</h2>
              <p className="section-desc">
                Explore our full line of pet grooming solutions, antiseptic sprays, spot-on treatments, and oral suspensions.
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

        {/* News & Blog (Auto-releases active weekly blogs) */}
        <NewsBlog />

        {/* Instagram Feed Integration (@wunple_care) */}
        <InstagramFeed />
      </main>

      <Footer />
    </>
  );
}
