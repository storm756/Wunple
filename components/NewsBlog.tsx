import Image from "next/image";
import Link from "next/link";
import { getPublishedBlogs } from "@/data/blogs";

export default function NewsBlog() {
  const publishedBlogs = getPublishedBlogs();
  const displayBlogs = publishedBlogs.slice(0, 3);

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <div className="section-header-centered">
          <span className="section-subtitle">Pet Care Knowledge &amp; Routine</span>
          <h2 className="section-title">News &amp; Educational Blog</h2>
          <p className="section-desc">
            Vetted care tips, grooming guidance, and health advice for happy, healthy cats and dogs in India.
          </p>
        </div>

        <div className="blog-grid">
          {displayBlogs.map((post) => {
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
                    height={250}
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
                  <h3 className="blog-title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="blog-read-more">
                    Read Full Article →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="blog-cta-center">
          <Link href="/blog" className="btn-view-all-blogs">
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
