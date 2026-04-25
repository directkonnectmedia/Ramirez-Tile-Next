import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import QuoteWizard from '../components/quote-wizard'

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
              alt="Modern farmhouse kitchen with hex floor tile, subway backsplash, and warm wood cabinets"
              src="/gallery/hero-feature.jpg"
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
        <section className="gallery-promo">
          <a href="/gallery" className="gallery-promo__link">
            <div className="gallery-promo__inner">
              <span className="gallery-promo__eyebrow">PORTFOLIO</span>
              <span className="gallery-promo__label">
                Check out our gallery
              </span>
              <span className="gallery-promo__arrow" aria-hidden="true">
                &rarr;
              </span>
            </div>
          </a>
        </section>
        <section id="services" className="services-stacked">
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
                </div>
                <div className="service-row__image">
                  <img
                    alt="Marble entryway floor with walnut diamond inlays"
                    src="/gallery/svc-floor.jpg"
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
                </div>
                <div className="service-row__image">
                  <img
                    alt="Marble shower with green penny mosaic floor and brushed gold fixtures"
                    src="/gallery/svc-bathroom.jpg"
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
                </div>
                <div className="service-row__image">
                  <img
                    alt="Walnut kitchen with peach watercolor vertical subway backsplash and brass faucet"
                    src="/gallery/svc-kitchen.jpg"
                    className="service-row__img"
                  />
                </div>
              </div>
              <div className="service-row--reverse service-row">
                <div className="service-row__text">
                  <h3 className="service-row__title">
                    Outdoor Tile Services
                  </h3>
                  <p className="section-content service-row__body">
                    Patios, exterior walls, outdoor kitchens, and entryways —
                    built with stone and porcelain that stand up to the Arizona
                    climate.
                  </p>
                </div>
                <div className="service-row__image">
                  <img
                    alt="Gray porcelain patio with planters and sun loungers"
                    src="/gallery/svc-outdoor.jpg"
                    className="service-row__img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="reviews" className="reviews-testimonials">
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
            <header className="consultation-block__header">
              <span className="consultation-eyebrow">
                SCHEDULE A CONSULTATION
              </span>
              <h2 className="consultation-block__title">Get a Free Quote</h2>
              <p className="consultation-block__subhead">
                Mobile service throughout the Phoenix valley — by appointment.
              </p>
            </header>
            <QuoteWizard />
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
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (!href || href === "#") return
      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        target.scrollIntoView({ behavior: "smooth" })
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
