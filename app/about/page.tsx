import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";

export default function AboutPage() {
  const amazonStoreUrl = "https://amzn.in/d/04SFVe10";

  return (
    <>
      <Navbar />

      <main className="main-content">
        {/* About Hero with Dog & Cat in Lawn Background */}
        <section className="page-hero-section about-hero">
          <div className="hero-bg-overlay">
            <Image
              src="/images/about-contact-hero.jpg"
              alt="Golden Retriever dog and tabby cat playing together outdoors with a yellow ball"
              fill
              priority
              className="hero-bg-img"
              sizes="100vw"
            />
            <div className="hero-scrim"></div>
          </div>

          <div className="container page-hero-container">
            <div className="page-hero-content">
              <div className="hero-pill-tag light">
                <span className="pill-dot">●</span>
                <span>ABOUT WUNPLE</span>
              </div>
              <h1 className="page-hero-title">
                If animals could talk,<br />
                they’d talk about us!
              </h1>
              <p className="page-hero-subtitle">
                At Wunple, we believe every pet deserves better care, gentler products, and a healthier, happier life. We are here to make pet parenting simpler, safer, and filled with joy.
              </p>
              <div className="page-hero-actions">
                <a
                  href={amazonStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Shop on Amazon ↗
                </a>
                <Link href="/contact" className="btn-secondary-light">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Mission & Stats Grid */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="brand-story-grid">
              <div className="brand-story-text">
                <span className="section-subtitle">Our Purpose</span>
                <h2 className="section-title">Crafted with Pure Love for Pets</h2>
                <p className="story-paragraph">
                  Wunple was created with one simple, unwavering idea: pets deserve the very same quality, safety, and care that we give to our closest family members. From everyday fur nourishment to targeted parasite solutions, every formulation is developed to keep your companions healthy, thriving, and full of vitality.
                </p>
                <p className="story-paragraph">
                  We combine clean botanical ingredients, veterinary-grade efficacy, and practical application methods to create products you can unconditionally trust.
                </p>
              </div>

              {/* Stats Counters */}
              <div className="stats-cards-grid">
                <div className="stat-card">
                  <strong className="stat-num">2,000+</strong>
                  <span className="stat-label">Happy Pet Parents</span>
                </div>
                <div className="stat-card">
                  <strong className="stat-num">720+</strong>
                  <span className="stat-label">5-Star Reviews</span>
                </div>
                <div className="stat-card">
                  <strong className="stat-num">100%</strong>
                  <span className="stat-label">Cruelty-Free &amp; Pet-Safe</span>
                </div>
                <div className="stat-card">
                  <strong className="stat-num">2+</strong>
                  <span className="stat-label">Years of Dedication</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section (Zubair) */}
        <section className="founder-section">
          <div className="container">
            <div className="founder-card">
              <div className="founder-visual">
                <div className="founder-avatar-badge">
                  <span className="paw-emoji">🐾</span>
                </div>
              </div>
              <div className="founder-details">
                <span className="founder-badge">FOUNDER</span>
                <h2 className="founder-name">Juber</h2>
                <blockquote className="founder-quote">
                  &ldquo;Wunple started with a simple belief: taking care of a pet shouldn’t feel complicated or uncertain. What began with a passion for better pet care has grown into a brand built around quality, trust, and the everyday bond between pets and their parents.&rdquo;
                </blockquote>
                <p className="founder-note">
                  Leading product research, pet wellness safety, and community initiatives at Wunple.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section-padding bg-light">
          <div className="container">
            <div className="section-header-centered">
              <span className="section-subtitle">The People Behind Wunple</span>
              <h2 className="section-title">Our Dedicated Team</h2>
              <p className="section-desc">
                Pet lovers, researchers, and specialists working together every single day.
              </p>
            </div>

            <div className="team-grid">
              <div className="team-card">
                <div className="team-avatar-box team-avatar-1">
                  <span>🐕</span>
                </div>
                <h3 className="team-name">Saikat</h3>
                <p className="team-role">Creative Designer</p>
                <p className="team-bio">Crafting the visual identity, thoughtful packaging, and brand aesthetics of Wunple.</p>
              </div>

              <div className="team-card">
                <div className="team-avatar-box team-avatar-2">
                  <span>🐈</span>
                </div>
                <h3 className="team-name">Ishan</h3>
                <p className="team-role">Software Developer</p>
                <p className="team-bio">Building fast, reliable digital storefront experiences and seamless customer interfaces.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials using the 4 Facecards */}
        <Testimonials />

        {/* Instagram Feed */}
        <InstagramFeed />
      </main>

      <Footer />
    </>
  );
}
