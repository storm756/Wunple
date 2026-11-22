import Image from "next/image";

export default function InstagramFeed() {
  const instagramUrl =
    "https://www.instagram.com/wunple_care?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";

  const instaPosts = [
    {
      id: 1,
      image: "/images/hero-beagle.png",
      caption: "Bath day done right with Wunple Coat Ease! 🐶✨ #PetCare"
    },
    {
      id: 2,
      image: "/images/corgi-bath.png",
      caption: "Bubble bath happiness for this happy corgi. 🛁🐾 #WunplePets"
    },
    {
      id: 3,
      image: "/images/banner-selamide.jpg",
      caption: "Targeted parasite care: keeping curious cats safe & scratch-free! 🐱🌿 #Selamide"
    },
    {
      id: 4,
      image: "/images/banner-chlox-spray.jpg",
      caption: "Soothe sensitive skin, hot spots & yeast infections fast. 🐕❤️ #PetWellness"
    }
  ];

  return (
    <section className="instagram-section">
      <div className="instagram-container">
        <div className="section-header-centered">
          <span className="section-subtitle">Join Our Community</span>
          <h2 className="section-title">Follow Us on Instagram</h2>
          <p className="section-desc">
            Catch behind-the-scenes moments, pet care tips, and adorable community pets at{" "}
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="insta-handle">
              @wunple_care
            </a>
          </p>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="insta-follow-btn"
          >
            <span>Follow @wunple_care</span>
            <span className="arrow">↗</span>
          </a>
        </div>

        {/* Instagram Grid Showcase */}
        <div className="instagram-grid">
          {instaPosts.map((post) => (
            <a
              key={post.id}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="insta-card"
              title={post.caption}
            >
              <div className="insta-img-wrapper">
                <Image
                  src={post.image}
                  alt={post.caption}
                  width={300}
                  height={300}
                  className="insta-img"
                />
                <div className="insta-overlay">
                  <span className="insta-icon">📷</span>
                  <p className="insta-caption">{post.caption}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
