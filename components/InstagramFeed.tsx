"use client";

import { useEffect } from "react";
import Script from "next/script";

const INSTA_POSTS = [
  "https://www.instagram.com/p/Df2cB8YzqOJ/",
  "https://www.instagram.com/p/DfXtTfZIVMZ/",
  "https://www.instagram.com/p/DfIRusZExwv/",
  "https://www.instagram.com/p/DZ0PcydE_GS/"
];

export default function InstagramFeed() {
  const instagramUrl =
    "https://www.instagram.com/wunple_care?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==";

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

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

        {/* Real Official Instagram Embed Grid */}
        <div className="instagram-embed-grid">
          {INSTA_POSTS.map((url, idx) => (
            <div key={idx} className="insta-embed-card">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
                data-instgrm-version="14"
                style={{
                  background: "#FFF",
                  border: 0,
                  borderRadius: "14px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  margin: "0 auto",
                  maxWidth: "540px",
                  minWidth: "280px",
                  padding: 0,
                  width: "100%"
                }}
              >
                <div style={{ padding: "16px" }}>
                  <a
                    href={`${url}?utm_source=ig_embed&utm_campaign=loading`}
                    style={{
                      background: "#FFFFFF",
                      lineHeight: "20px",
                      padding: "16px 0",
                      textAlign: "center",
                      textDecoration: "none",
                      display: "block",
                      color: "#168cf0",
                      fontWeight: 700,
                      fontSize: "14px"
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View post on Instagram (@wunple_care) ↗
                  </a>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
          }
        }}
      />
    </section>
  );
}
