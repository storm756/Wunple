import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ALL_BLOGS, getBlogBySlug } from "@/data/blogs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_BLOGS.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found | Wunple"
    };
  }

  return {
    title: `${post.title} | Wunple Pet Care`,
    description: post.metaDescription,
    keywords: [post.focusKeyword, "pet care", "Wunple", "dog grooming", "cat health"]
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const currentIndex = ALL_BLOGS.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? ALL_BLOGS[currentIndex - 1] : null;
  const nextPost = currentIndex < ALL_BLOGS.length - 1 ? ALL_BLOGS[currentIndex + 1] : null;

  const formattedDate = new Date(post.publishDate).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <>
      <Navbar />

      <main className="main-content article-main">
        {/* Article Header */}
        <header className="article-header">
          <div className="container article-container">
            <div className="article-breadcrumbs">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/blog">Blog</Link>
              <span>/</span>
              <span className="current-crumb">{post.category}</span>
            </div>

            <span className="article-category-badge">{post.category}</span>
            <h1 className="article-title">{post.title}</h1>

            <div className="article-meta-bar">
              <div className="article-author-info">
                <span className="author-avatar">🐾</span>
                <div>
                  <strong className="author-name">Wunple Editorial Team</strong>
                  <span className="publish-date">Published {formattedDate} • {post.readTime}</span>
                </div>
              </div>
              <div className="focus-keyword-tag">
                Focus: <code>{post.focusKeyword}</code>
              </div>
            </div>
          </div>
        </header>

        {/* Article Featured Image */}
        <div className="container article-container">
          <div className="article-featured-image-box">
            <Image
              src={post.image}
              alt={post.title}
              width={1000}
              height={500}
              priority
              className="article-featured-img"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Article Body */}
        <article className="article-body-wrapper">
          <div className="container article-container">
            <div className="article-lead">
              <p>{post.excerpt}</p>
            </div>

            <div className="article-content">
              {post.sections.map((sec, idx) => (
                <div key={idx} className="article-section">
                  {sec.heading && <h2 className="article-heading">{sec.heading}</h2>}
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="article-paragraph">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Editorial Highlight Callout Box */}
            {post.callout && (
              <aside className="article-callout-box" aria-label="Key Takeaway">
                <div className="callout-icon">💡</div>
                <div className="callout-text">
                  <strong>Key Takeaway:</strong>
                  <p>{post.callout}</p>
                </div>
              </aside>
            )}

            {/* Medical / Veterinary Disclaimer */}
            <div className="article-disclaimer">
              <p>
                <strong>Editorial note:</strong> Health-related content is educational and should not replace professional veterinary advice. Always consult your veterinarian for persistent symptoms or individualized medical decisions.
              </p>
            </div>

            {/* Next / Prev Post Navigation */}
            <nav className="article-navigation" aria-label="Articles Navigation">
              {prevPost ? (
                <Link href={`/blog/${prevPost.slug}`} className="nav-post-link nav-post-prev">
                  <span className="nav-direction">← Previous Article</span>
                  <strong className="nav-title">{prevPost.title}</strong>
                </Link>
              ) : (
                <div />
              )}
              {nextPost && (
                <Link href={`/blog/${nextPost.slug}`} className="nav-post-link nav-post-next">
                  <span className="nav-direction">Next Article →</span>
                  <strong className="nav-title">{nextPost.title}</strong>
                </Link>
              )}
            </nav>

            <div className="back-to-blogs-row">
              <Link href="/blog" className="btn-back-blogs">
                ← View All 10 Pet Care Articles
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}

