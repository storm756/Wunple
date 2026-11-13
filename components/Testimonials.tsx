"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  id: number;
  name: string;
  petType: string;
  rating: number;
  quote: string;
  image: string;
  productMentioned: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Pooja Sharma",
    petType: "Golden Retriever Mom",
    rating: 5,
    quote:
      "Wunple Coat Ease shampoo transformed Bruno's coat completely! He had sensitive, flaky skin after regular shampoos, but this left his fur silky smooth and smelling amazing without any itching.",
    image: "/images/testimonial-1.png",
    productMentioned: "Coat Ease Pet Shampoo"
  },
  {
    id: 2,
    name: "Ananya Roy",
    petType: "Cat Parent (2 Kittens)",
    rating: 5,
    quote:
      "Finding gentle parasite care for kittens is tough, but Selamide Spot On worked flawlessly. It is so easy to apply, doesn't bother my cats, and gave total peace of mind against mites and fleas.",
    image: "/images/testimonial-2.png",
    productMentioned: "Selamide Spot On"
  },
  {
    id: 3,
    name: "Sunita Menon",
    petType: "Beagle Parent",
    rating: 5,
    quote:
      "The Itch Relief shampoo gave instant comfort to our beagle after weeks of seasonal skin irritation. Within two washes, the redness subsided. Wunple is now our permanent go-to pet care brand.",
    image: "/images/testimonial-3.png",
    productMentioned: "Itch Relief Pet Shampoo"
  },
  {
    id: 4,
    name: "Karan Verma",
    petType: "Adoptive Indie Parent",
    rating: 5,
    quote:
      "I love how thoughtful the formulations are. Natural ingredients, tear-free, and you can tell it’s developed by people who genuinely care about animals. Ordering on Amazon is seamless too!",
    image: "/images/testimonial-4.png",
    productMentioned: "Wunple Pet Essentials"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Automatic slideshow timer (advances every 5 seconds unless paused on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header-centered">
          <span className="section-subtitle">Real Stories from Pet Parents</span>
          <h2 className="section-title">Loved by Pets, Trusted by Parents</h2>
        </div>

        {/* Testimonial Slideshow Card */}
        <div
          className="testimonial-card"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="testimonial-content">
            {/* 5 Stars */}
            <div className="rating-stars" aria-label="5 out of 5 stars" suppressHydrationWarning>
              {"★".repeat(current.rating)}
            </div>

            <blockquote className="testimonial-quote">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            <div className="testimonial-meta">
              <strong className="author-name">{current.name}</strong>
              <span className="author-pet">{current.petType}</span>
              <span className="verified-badge">✓ Verified Buyer ({current.productMentioned})</span>
            </div>

            {/* Slideshow Controls: Navigation Arrows + Dots */}
            <div className="testimonial-nav-row">
              <div className="arrow-controls">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="testimonial-arrow-btn"
                  title="Previous review"
                  aria-label="Previous review"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="19" y1="12" x2="5" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="testimonial-arrow-btn"
                  title="Next review"
                  aria-label="Next review"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>

              {/* Navigation Dots */}
              <div className="testimonial-controls">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`dot-btn ${idx === activeIndex ? "active" : ""}`}
                    aria-label={`View review from ${t.name}`}
                  />
                ))}
              </div>

              <span className="slideshow-counter">
                {activeIndex + 1} / {TESTIMONIALS.length}
              </span>
            </div>
          </div>

          {/* Testimonial Avatar with Figma-style Organic Blob Background */}
          <div className="testimonial-avatar-col">
            <div className="organic-blob-wrapper">
              <div className="organic-blob"></div>
              <div className="avatar-frame">
                <Image
                  src={current.image}
                  alt={current.name}
                  width={220}
                  height={220}
                  className="reviewer-face"
                  priority
                />
              </div>
              <span className="heart-badge">🐾</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
