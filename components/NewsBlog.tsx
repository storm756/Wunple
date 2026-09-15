import Image from "next/image";
import Link from "next/link";

export default function NewsBlog() {
  const articles = [
    {
      id: 1,
      title: "Pet Health, Made Simple: Choosing The Right Shampoo",
      date: "24 May, 2026",
      tag: "News",
      image: "/images/hero-beagle.png",
      excerpt:
        "Learn why pH-balanced formulations with natural silk protein and aloe vera prevent flaky skin and keep coats shiny."
    },
    {
      id: 2,
      title: "Care Tips For Happier Pets: Preventing Fleas & Mites",
      date: "18 May, 2026",
      tag: "Care Tips",
      image: "/images/product-selamide.jpg",
      excerpt:
        "Top vet-recommended advice on keeping outdoor and indoor cats safe from external parasites with topical spot-on treatments."
    },
    {
      id: 3,
      title: "Building Better Bathing Routines For Sensitive Dogs",
      date: "12 May, 2026",
      tag: "Grooming",
      image: "/images/corgi-bath.png",
      excerpt:
        "How to turn stressful bath time into a soothing, bonding experience with gentle anti-itch botanicals and warm water."
    }
  ];

  return (
    <section className="blog-section" id="blog">
      <div className="blog-container">
        <div className="section-header-centered">
          <span className="section-subtitle">Pet Care Knowledge</span>
          <h2 className="section-title">News &amp; Blog</h2>
        </div>

        <div className="blog-grid">
          {articles.map((item) => (
            <article key={item.id} className="blog-card">
              <div className="blog-image-wrapper">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="blog-img"
                />
                <span className="blog-tag">{item.tag}</span>
              </div>
              <div className="blog-content">
                <time className="blog-date">📅 {item.date}</time>
                <h3 className="blog-title">
                  <Link href="/about">{item.title}</Link>
                </h3>
                <p className="blog-excerpt">{item.excerpt}</p>
                <Link href="/about" className="blog-read-more">
                  Read Full Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
