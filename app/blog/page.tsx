import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPublishedBlogs } from "@/data/blogs";

export const metadata = {
  title: "Pet Care Blogs & Guides | Wunple",
  description:
    "Expert pet parenting tips, grooming advice, cat parasite prevention, and daily pet care guides by Wunple."
};

export default function BlogListingPage() {
  const publishedBlogs = getPublishedBlogs();

  return (
    <>
      <Navbar />

      <main className="main-content">
        {/* Blog Hero Header */}
        <section className="shop-hero-section">
          <div className="container">
            <div className="shop-hero-inner">
              <span className="hero-pill-tag">WUNPLE EDITORIAL</span>
              <h1 className="shop-hero-title">Pet Care Knowledge &amp; Routine</h1>
              <p className="shop-hero-subtitle">
                Expert pet-care articles on grooming routines, parasite protection, apartment living, and responsible pet parenting across India.
              </p>
            </div>
          </div>
        </section>

        {/* Blogs Grid (Only published articles) */}
        <section className="section-padding bg-light">
          <div className="container">
            <div className="blog-grid blog-grid-archive">
              {publishedBlogs.map((post) => {
                const formattedDate = new Date(post.publishDate).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric"
                });

                return (
                  <article key={post.slug} className="blog-card">
                    <div className="blog-image-wrapper">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={240}
                        className="blog-img"
                        style={{ objectFit: "cover" }}
                      />
                      <span className="blog-tag">{post.category}</span>
                    </div>

                    <div className="blog-content">
                      <div className="blog-meta-row">
                        <span className="blog-date">📅 {formattedDate}</span>
                        <span className="blog-meta-divider">•</span>
                        <span className="blog-read-time">⏱️ {post.readTime}</span>
                      </div>

                      <h2 className="blog-title">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="blog-excerpt">{post.excerpt}</p>

                      <div className="blog-footer-row">
                        <Link href={`/blog/${post.slug}`} className="blog-read-more">
                          Read Article →
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
