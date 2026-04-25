import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Ramirez Tile</title>
          <meta property="og:title" content="Ramirez Tile" />
          <link
            rel="canonical"
            href="https://creative-elliptical-wasp-mso9gs.teleporthq.site/"
          />
          <meta
            property="og:url"
            content="https://creative-elliptical-wasp-mso9gs.teleporthq.site/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-signature">
          <div className="hero-signature__media">
            <img
              alt="Luxury bathroom with marble shower walls and freestanding tub"
              src="https://images.pexels.com/photos/16249147/pexels-photo-16249147.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="hero-signature__image"
            />
          </div>
          <div className="hero-signature__overlay">
            <div className="hero-signature__content">
              <div className="hero-signature__brand">
                <div className="hero-signature__logo-group">
                  <div className="hero-signature__monogram">
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                    >
                      <path
                        d="M50 10L90 50L50 90L10 50L50 10Z"
                        stroke="#C9A24B"
                        strokeWidth="4"
                      ></path>
                      <path
                        d="M40 35H55C60 35 63 38 63 42C63 46 60 49 55 49H40V65M50 49L65 65"
                        stroke="#C9A24B"
                        strokeWidth="4"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="hero-signature__wordmark">Ramirez Tile</span>
                </div>
                <span className="hero-signature__tagline">
                  CUSTOM TILE • PHOENIX
                </span>
              </div>
              <h1 className="home-hero-title hero-title">
                Custom tile artistry for every space.
              </h1>
              <p className="hero-subtitle">
                From floors and showers to backsplashes and pool decks —
                installed with precision and care across the Phoenix valley.
              </p>
              <a href="#contact">
                <div className="btn btn-primary btn-lg hero-signature__cta">
                  <span>GET A FREE QUOTE</span>
                </div>
              </a>
            </div>
          </div>
          <div className="hero-signature__mobile-cta">
            <a href="tel:+16024763358">
              <div className="hero-signature__phone-link">
                <span>Call us: 602-476-3358</span>
              </div>
            </a>
          </div>
        </section>
        <section className="experience-showcase">
          <div className="experience-showcase__container">
            <div className="experience-showcase__header">
              <span className="experience-eyebrow">OUR SPECIALTIES</span>
              <h2 className="section-title">Experience &amp; Craftsmanship</h2>
              <p className="section-content experience-subline">
                We make tile selection effortless and installation flawless —
                every cut, every grout line, every layout decision considered.
              </p>
            </div>
            <div className="experience-showcase__grid">
              <a href="/services/floor-tile">
                <div className="experience-card">
                  <div className="experience-card__image-wrapper">
                    <img
                      alt="Macro shot of porcelain floor tile"
                      src="https://images.pexels.com/photos/10827406/pexels-photo-10827406.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      className="experience-card__img"
                    />
                  </div>
                  <h4 className="experience-card__title">Floor Tile</h4>
                </div>
              </a>
              <a href="/services/bathrooms-showers">
                <div className="experience-card">
                  <div className="experience-card__image-wrapper">
                    <img
                      alt="Close-up of marble wall tile"
                      src="https://images.pexels.com/photos/35618223/pexels-photo-35618223.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      className="experience-card__img"
                    />
                  </div>
                  <h4 className="experience-card__title">
                    Backsplashes &amp; Showers
                  </h4>
                </div>
              </a>
              <a href="/services/outdoor-pool">
                <div className="experience-card">
                  <div className="experience-card__image-wrapper">
                    <img
                      alt="Pool waterline tile detail"
                      src="https://images.pexels.com/photos/6580405/pexels-photo-6580405.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                      className="experience-card__img"
                    />
                  </div>
                  <h4 className="experience-card__title">
                    Outdoor &amp; Pool Tile
                  </h4>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="crafted-feature">
          <div className="crafted-feature__wrapper">
            <div className="crafted-feature__media">
              <img
                alt="Custom shower with marble walls and niche"
                src="https://images.pexels.com/photos/8089164/pexels-photo-8089164.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="crafted-feature__image"
              />
            </div>
            <div className="crafted-feature__content">
              <span className="crafted-eyebrow">CRAFTED TO LAST</span>
              <h2 className="section-title crafted-title">
                Designed to Inspire.
              </h2>
              <p className="crafted-body section-content">
                Tile is more than a surface — it sets the tone for the entire
                room. We help you choose materials, patterns, and layouts that
                make your space feel intentional, considered, and timeless. From
                the very first sample to the final grout line, our work is meant
                to last for decades.
              </p>
            </div>
          </div>
        </section>
        <section className="about-legacy">
          <div className="about-legacy__container">
            <div className="about-legacy__grid">
              <div className="about-legacy__text">
                <span className="about-eyebrow">ABOUT US</span>
                <h2 className="section-title about-title">
                  A Family Legacy in Tile.
                </h2>
                <div className="about-paragraphs">
                  <p className="about-body section-content">
                    Ramirez Tile is a locally-owned tile installation company
                    proudly serving homeowners throughout the Phoenix valley.
                    With decades of hands-on experience, the Ramirez family
                    brings precision, artistry, and personal service to every
                    project — from a single backsplash to a full home remodel.
                  </p>
                  <p className="about-body section-content">
                    We believe tile work is craftsmanship, not just
                    construction. Every cut, every grout line, every layout
                    decision matters. That&apos;s why our clients trust us to
                    treat their homes like our own.
                  </p>
                </div>
              </div>
              <div className="about-legacy__visual">
                <div className="about-legacy__image-box">
                  <img
                    alt="The Ramirez family team"
                    src="https://images.pexels.com/photos/6934233/pexels-photo-6934233.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="about-legacy__img"
                  />
                  <span className="about-legacy__caption">
                    Ivan Ramirez, Founder
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-stacked">
          <div className="services-stacked__container">
            <div className="services-stacked__header">
              <span className="services-eyebrow">
                SERVING HOMEOWNERS &amp; CONTRACTORS
              </span>
              <h2 className="section-title">Services &amp; Specialties</h2>
            </div>
            <div className="services-stacked__list">
              <div className="service-row">
                <div className="service-row__text">
                  <h3 className="service-row__title">
                    Floor Tile Installation
                  </h3>
                  <p className="section-content service-row__body">
                    From large-format porcelain to natural stone, we install
                    floors that hold up to Phoenix life and look beautiful doing
                    it.
                  </p>
                  <a href="/services/floor-tile">
                    <div className="btn btn-primary btn-sm">
                      <span>LEARN MORE</span>
                    </div>
                  </a>
                </div>
                <div className="service-row__image">
                  <img
                    alt="Floor tile installation"
                    src="https://images.pexels.com/photos/6587893/pexels-photo-6587893.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="service-row__img"
                  />
                </div>
              </div>
              <div className="service-row--reverse service-row">
                <div className="service-row__text">
                  <h3 className="service-row__title">
                    Bathroom Tile &amp; Showers
                  </h3>
                  <p className="section-content service-row__body">
                    Custom shower surrounds, niches, benches, and bathroom
                    floors — built waterproof, finished beautifully.
                  </p>
                  <a href="/services/bathrooms-showers">
                    <div className="btn btn-primary btn-sm">
                      <span>LEARN MORE</span>
                    </div>
                  </a>
                </div>
                <div className="service-row__image">
                  <img
                    alt="Bathroom shower tile"
                    src="https://images.pexels.com/photos/7546317/pexels-photo-7546317.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="service-row__img"
                  />
                </div>
              </div>
              <div className="service-row">
                <div className="service-row__text">
                  <h3 className="service-row__title">Kitchen Backsplashes</h3>
                  <p className="section-content service-row__body">
                    Subway, mosaic, marble, or hand-painted tile — backsplashes
                    that become the focal point of the kitchen.
                  </p>
                  <a href="/services/kitchen-backsplashes">
                    <div className="btn btn-primary btn-sm">
                      <span>LEARN MORE</span>
                    </div>
                  </a>
                </div>
                <div className="service-row__image">
                  <img
                    alt="Kitchen backsplash tile"
                    src="https://images.pexels.com/photos/29412579/pexels-photo-29412579.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="service-row__img"
                  />
                </div>
              </div>
              <div className="service-row--reverse service-row">
                <div className="service-row__text">
                  <h3 className="service-row__title">
                    Outdoor, Pool &amp; Patio Tile
                  </h3>
                  <p className="section-content service-row__body">
                    Pool waterlines, patios, outdoor kitchens, and BBQ surrounds
                    — built for the Arizona climate.
                  </p>
                  <a href="/services/outdoor-pool">
                    <div className="btn btn-primary btn-sm">
                      <span>LEARN MORE</span>
                    </div>
                  </a>
                </div>
                <div className="service-row__image">
                  <img
                    alt="Outdoor pool tile"
                    src="https://images.pexels.com/photos/10827343/pexels-photo-10827343.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="service-row__img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="reviews-testimonials">
          <div className="reviews-testimonials__container">
            <div className="reviews-testimonials__header">
              <span className="reviews-eyebrow">WHAT OUR CLIENTS SAY</span>
              <h2 className="section-title">
                Trusted by Homeowners Across the Valley.
              </h2>
            </div>
            <div className="reviews-testimonials__grid">
              <div className="testimonial-card">
                <div className="testimonial-card__stars">
                  <svg
                    fill="#D4AF37"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="#D4AF37"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="#D4AF37"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="#D4AF37"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="#D4AF37"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <p className="testimonial-card__quote">
                  &quot;Ramirez Tile transformed our master bathroom — every
                  detail was perfect. Professional, on time, and unbelievable
                  craftsmanship.&quot;
                </p>
                <span className="testimonial-card__author">
                  — Maria S., Phoenix, AZ
                </span>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-card__stars">
                  <svg
                    fill="#D4AF37"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="#D4AF37"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="#D4AF37"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="#D4AF37"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="#D4AF37"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <p className="testimonial-card__quote">
                  &quot;We had them install a new backsplash and it completely
                  changed the kitchen. The work was so clean we couldn&apos;t
                  believe it.&quot;
                </p>
                <span className="testimonial-card__author">
                  — David R., Scottsdale, AZ
                </span>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-card__stars">
                  <svg
                    fill="#D4AF37"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="#D4AF37"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="#D4AF37"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="#D4AF37"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="#D4AF37"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <p className="testimonial-card__quote">
                  &quot;Best tile crew we&apos;ve had at our home, hands down.
                  Respectful, skilled, and finished ahead of schedule.&quot;
                </p>
                <span className="testimonial-card__author">
                  — Sarah L., Peoria, AZ
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="transform-cta">
          <div className="transform-cta__media">
            <img
              alt="Beautifully finished tiled room"
              src="https://images.pexels.com/photos/14393710/pexels-photo-14393710.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="transform-cta__image"
            />
          </div>
          <div className="transform-cta__overlay">
            <div className="transform-cta__content">
              <h2 className="transform-cta__title section-title">
                Ready to transform your space?
              </h2>
              <p className="section-content transform-cta__subline">
                Mobile service throughout the Phoenix valley — let&apos;s talk
                about your project.
              </p>
              <a href="#contact">
                <div className="btn btn-lg btn-accent transform-cta__btn">
                  <span>GET A FREE QUOTE</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section id="contact" className="consultation-block">
          <div className="consultation-block__container">
            <div className="consultation-block__grid">
              <div className="consultation-block__visual">
                <img
                  alt="Walk-in shower detail"
                  src="https://images.pexels.com/photos/7546284/pexels-photo-7546284.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="consultation-block__img"
                />
              </div>
              <div className="consultation-block__card">
                <h2 className="section-title consultation-card__title">
                  Schedule a Consultation
                </h2>
                <p className="section-content consultation-card__subhead">
                  Mobile service throughout the Phoenix valley — by appointment.
                </p>
                <div className="consultation-info">
                  <div className="consultation-info__item">
                    <span className="consultation-info__label">PHONE</span>
                    <a href="tel:+16024763358">
                      <div className="consultation-info__value">
                        <span>602-476-3358</span>
                      </div>
                    </a>
                  </div>
                  <div className="consultation-info__item">
                    <span className="consultation-info__label">
                      SERVICE AREA
                    </span>
                    <p className="consultation-info__value-text">
                      Phoenix, Surprise, Glendale, Peoria, Scottsdale, and
                      surrounding cities.
                    </p>
                  </div>
                  <div className="consultation-info__item">
                    <span className="consultation-info__label">
                      CONSULTATIONS
                    </span>
                    <p className="consultation-info__value-text">
                      Monday–Saturday, by appointment.
                    </p>
                  </div>
                </div>
                <a href="/contact">
                  <div className="btn btn-lg btn-accent consultation-card__cta">
                    <span>REQUEST A QUOTE</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
0,600;1,500;1,600&family=Inter:wght@400;500;600&display=swap");

  
  :root {
  --font-family-heading: "Cormorant Garamond", serif;
  --font-family-body: "Inter", sans-serif;
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="ramirez-tile-animations">
(function(){
  // Intersection Observer for scroll-triggered fade-in and rise
  const observerOptions = {
    threshold: 0.2,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Apply initial styles and observe all sections
  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(24px)"
    section.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
    observer.observe(section)
  })

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
