import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav className="navigation-wrapper">
          <div className="navigation-container">
            <a href="Homepage">
              <div
                aria-label="Ramirez Tile Home"
                className="navigation-logo-link"
              >
                <div className="navigation-logo-content">
                  <div className="navigation-monogram">
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                    >
                      <path
                        d="M50 5L95 50L50 95L5 50L50 5Z"
                        stroke="currentColor"
                        strokeWidth="6"
                      ></path>
                      <path
                        d="M35 35H55C60 35 65 38 65 43C65 48 60 51 55 51H35V65M51 51L65 65"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="navigation-brand-name">Ramirez Tile</span>
                </div>
              </div>
            </a>
            <div className="navigation-desktop-menu">
              <ul className="navigation-links-list">
                <li>
                  <a href="Homepage">
                    <div className="is-active navigation-link">
                      <span>Home</span>
                    </div>
                  </a>
                </li>
                <li className="navigation-dropdown-trigger">
                  <span className="navigation-link">
                    <span>
                      {' '}
                      Services
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="navigation-thq-navigation-chevron-elm"></span>
                  </span>
                  <ul className="navigation-dropdown-menu">
                    <li>
                      <a href="Floor-Tile">
                        <div className="navigation-dropdown-link">
                          <span>Floor Tile</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="Bathroom-Showers">
                        <div className="navigation-dropdown-link">
                          <span>Bathroom &amp; Showers</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="Kitchen-Backsplashes">
                        <div className="navigation-dropdown-link">
                          <span>Kitchen Backsplashes</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="Outdoor-Pool">
                        <div className="navigation-dropdown-link">
                          <span>Outdoor &amp; Pool Tile</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="About">
                    <div className="navigation-link">
                      <span>About</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="Reviews">
                    <div className="navigation-link">
                      <span>Reviews</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="Contact">
                    <div className="navigation-link">
                      <span>Contact</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="navigation-actions">
              <a href="#">
                <div
                  aria-label="Follow us on Instagram"
                  className="navigation-social-btn"
                >
                  <svg
                    fill="none"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    height="20"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"></path>
                  </svg>
                </div>
              </a>
              <a href="Contact">
                <div className="btn btn-primary navigation-cta-desktop">
                  <span>Get a Quote</span>
                </div>
              </a>
              <button
                id="navigationMobileToggle"
                aria-label="Toggle navigation menu"
                aria-expanded="false"
                className="navigation-mobile-toggle"
              >
                <svg
                  fill="none"
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  height="28"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 8h16M4 16h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div id="navigationMobileOverlay" className="navigation-mobile-overlay">
          <div className="navigation-mobile-header">
            <a href="Homepage">
              <div
                aria-label="Ramirez Tile Home"
                className="navigation-logo-link"
              >
                <div className="navigation-logo-content">
                  <div className="navigation-monogram">
                    <svg
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                    >
                      <path
                        d="M50 5L95 50L50 95L5 50L50 5Z"
                        stroke="currentColor"
                        strokeWidth="6"
                      ></path>
                      <path
                        d="M35 35H55C60 35 65 38 65 43C65 48 60 51 55 51H35V65M51 51L65 65"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </div>
                  <span className="navigation-brand-name is-white">
                    Ramirez Tile
                  </span>
                </div>
              </div>
            </a>
            <button
              id="navigationMobileClose"
              aria-label="Close menu"
              className="navigation-mobile-close"
            >
              <svg
                fill="none"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
                height="28"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="navigation-mobile-content">
            <ul className="navigation-mobile-links">
              <li>
                <a href="Homepage">
                  <div className="navigation-mobile-link">
                    <span>Home</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="Services">
                  <div className="navigation-mobile-link">
                    <span>Services</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="About">
                  <div className="navigation-mobile-link">
                    <span>About</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="Reviews">
                  <div className="navigation-mobile-link">
                    <span>Reviews</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="Contact">
                  <div className="navigation-mobile-link">
                    <span>Contact</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="navigation-mobile-footer">
              <a href="tel:+16024763358">
                <div className="navigation-mobile-phone">
                  <span>602-476-3358</span>
                </div>
              </a>
              <a href="#">
                <div
                  aria-label="Follow us on Instagram"
                  className="is-large navigation-social-btn"
                >
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m7.5-4.5v.01"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const navWrapper = document.querySelector(".navigation-wrapper")
  const mobileToggle = document.getElementById("navigationMobileToggle")
  const mobileClose = document.getElementById("navigationMobileClose")
  const mobileOverlay = document.getElementById("navigationMobileOverlay")

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navWrapper.classList.add("is-scrolled")
    } else {
      navWrapper.classList.remove("is-scrolled")
    }
  })

  // Mobile menu toggle
  mobileToggle.addEventListener("click", () => {
    mobileOverlay.classList.add("is-open")
    mobileToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  })

  mobileClose.addEventListener("click", () => {
    mobileOverlay.classList.remove("is-open")
    mobileToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  })

  // Close mobile menu on link click
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileOverlay.classList.remove("is-open")
      document.body.style.overflow = ""
    })
  })

  // Close on backdrop click (optional but good UX)
  mobileOverlay.addEventListener("click", (e) => {
    if (e.target === mobileOverlay) {
      mobileOverlay.classList.remove("is-open")
      document.body.style.overflow = ""
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-thq-navigation-chevron-elm {
            width: 8px;
            height: 8px;
            display: inline-block;
            transform: rotate(45deg) translateY(-2px);
            transition: transform 0.2s ease;
            margin-left: 4px;
            border-right: 1.5px solid var(--color-on-surface);
            border-bottom: 1.5px solid var(--color-on-surface);
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
