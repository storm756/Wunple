"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface BannerSlide {
  id: string;
  image: string;
  title: string;
  link: string;
  badge: string;
  subtitle: string;
}

const SLIDES: BannerSlide[] = [
  {
    id: "selamide",
    image: "/images/banner-selamide.jpg",
    title: "Selamide Spot On",
    subtitle: "Trusted Parasite Protection for Your Cat",
    badge: "SPOT ON CARE",
    link: "/products/selamide-spot-on"
  },
  {
    id: "coat-ease",
    image: "/images/banner-coat-ease.jpg",
    title: "Coat Ease Pet Shampoo",
    subtitle: "Nourishment, Shine & Hydration for a Healthy Coat",
    badge: "PET SHAMPOO",
    link: "/products/coat-ease"
  },
  {
    id: "wuncef",
    image: "/images/banner-wuncef.jpg",
    title: "WUNCEF® Dry Syrup",
    subtitle: "Effective Treatment for UTI, Skin & Respiratory Infections",
    badge: "NEW LAUNCH",
    link: "/products/wuncef-dry-syrup"
  },
  {
    id: "chlox",
    image: "/images/banner-chlox-spray.jpg",
    title: "Chlox Antiseptic Spray",
    subtitle: "Gentle Care for Your Pets' Skin & Coat",
    badge: "ANTISEPTIC SPRAYS",
    link: "/products/chlox-antiseptic-spray"
  },
  {
    id: "porxolyn",
    image: "/images/banner-porxolyn.jpg",
    title: "Porxolyn-20 Oral Suspension",
    subtitle: "Effective Management of Fungal Infections in Pets",
    badge: "VETERINARY PHARMA",
    link: "/products/porxolyn-20"
  }
];

export default function SlidingBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <section
      className="slider-banner-wrapper"
      aria-label="Featured Product Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="slider-banner-container">
        {/* Carousel viewport */}
        <div className="slider-viewport">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
            }}
          >
            {SLIDES.map((slide, index) => (
              <div key={slide.id} className="slider-slide">
                <Link href={slide.link} className="slider-link" title={slide.title}>
                  <div className="slider-image-box">
                    <Image
                      src={slide.image}
                      alt={`${slide.title} - ${slide.subtitle}`}
                      width={1024}
                      height={389}
                      priority={index === 0}
                      unoptimized
                      className="slider-img"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="slider-arrow slider-arrow-prev"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="slider-arrow slider-arrow-next"
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Navigation Dots */}
        <div className="slider-dots" role="tablist">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={idx === currentIndex}
              className={`slider-dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

