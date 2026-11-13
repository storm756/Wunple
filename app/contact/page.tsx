"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="main-content">
        {/* Contact Hero with Dog & Cat Background */}
        <section className="page-hero-section contact-hero">
          <div className="hero-bg-overlay">
            <Image
              src="/images/about-contact-hero.jpg"
              alt="Pets playing together outdoors"
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
                <span>GET IN TOUCH</span>
              </div>
              <h1 className="page-hero-title">
                If animals could talk,<br />
                they’d talk to us!
              </h1>
              <p className="page-hero-subtitle">
                Have a question about Coat Ease, Itch Relief, Selamide Spot On, or WUNCEF? Need advice for your pet? Our friendly team is always here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Information Split Section */}
        <section className="section-padding bg-light">
          <div className="container">
            <div className="contact-layout">
              {/* Form Card */}
              <div className="contact-form-card">
                <h2 className="form-card-title">Send Us a Message</h2>
                <p className="form-card-subtitle">
                  Fill out the form below and we will get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="form-success-banner">
                    <span className="success-icon">🎉</span>
                    <h3>Thank you for reaching out!</h3>
                    <p>We’ve received your message and our pet care team will respond shortly.</p>
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row-2">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name *</label>
                        <input
                          id="firstName"
                          type="text"
                          required
                          placeholder="e.g. Rahul"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name *</label>
                        <input
                          id="lastName"
                          type="text"
                          required
                          placeholder="e.g. Sharma"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject / Pet Name</label>
                      <input
                        id="subject"
                        type="text"
                        placeholder="e.g. Inquiry about Coat Ease for Golden Retriever"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Your Message *</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Tell us how we can help your pet..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                    </div>

                    {errorMessage && (
                      <div className="form-error-banner" style={{ color: '#ef4444', fontSize: '14px', marginTop: '10px' }}>
                        ⚠️ {errorMessage}
                      </div>
                    )}
                    <button type="submit" className="btn-primary form-submit-btn" disabled={isLoading}>
                      {isLoading ? "Sending..." : "Send Message ✉"}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Info Sidebar */}
              <div className="contact-info-card">
                <span className="section-subtitle">Reach Us Directly</span>
                <h2 className="info-card-title">Feel free to contact us</h2>
                <p className="info-card-desc">
                  We are always delighted to help with product questions, coat care routines, and bulk order enquiries.
                </p>

                <div className="info-items-list">
                  <div className="info-item">
                    <div className="info-icon-box">⌖</div>
                    <div className="info-item-content">
                      <strong>Office Address</strong>
                      <p>MJ Enterprises</p>
                      <p>Marigold Appt, Shop No-2, Plot No-7/8, Sector-2, Ulwe – 410206</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon-box">✉</div>
                    <div className="info-item-content">
                      <strong>Email Support</strong>
                      <p><a href="mailto:wunple01@gmail.com">wunple01@gmail.com</a></p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon-box">☎</div>
                    <div className="info-item-content">
                      <strong>Customer Hotline</strong>
                      <p><a href="tel:+917718894017">+91 7718894017</a></p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon-box">◷</div>
                    <div className="info-item-content">
                      <strong>Operating Hours</strong>
                      <p>Monday – Friday: 9:00 AM – 10:00 PM</p>
                      <p>Saturday – Sunday: 10:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="amazon-banner-pill">
                  <span className="amz-badge">Amazon Verified</span>
                  <p>All official orders are processed with Amazon Prime guarantees &amp; swift customer returns.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}
