import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-wrapper">
          <div className="footer-container">
            <div className="footer-main-grid">
              <div className="footer-area-column footer-column">
                <span className="footer-eyebrow">SERVICE AREA</span>
                <p className="footer-text">
                  Phoenix · Surprise · Glendale · Peoria · Scottsdale and
                  surrounding cities.
                </p>
              </div>
              <div className="footer-identity-column footer-column">
                <Link href="/">
                  <a>
                    <div
                      aria-label="Ramirez Tile Home"
                      className="footer-logo-link"
                    >
                      <div className="footer-logo-group">
                        <div aria-hidden="true" className="footer-monogram">
                          <svg
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                          >
                            <path
                              d="M50 5L90 50L50 95L10 50L50 5Z"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></path>
                            <path
                              d="M35 35H65V50H35V65"
                              stroke="currentColor"
                              strokeWidth="4"
                              strokeLinecap="round"
                            ></path>
                          </svg>
                        </div>
                        <span className="footer-wordmark">Ramirez Tile</span>
                      </div>
                    </div>
                  </a>
                </Link>
                <div className="footer-social-wrapper">
                  <a href="#">
                    <div
                      aria-label="Follow us on Instagram"
                      className="footer-social-link"
                    >
                      <svg
                        fill="none"
                        width="32"
                        xmlns="http://www.w3.org/2000/svg"
                        height="32"
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
              <div className="footer-contact-column footer-column">
                <span className="footer-eyebrow">PHONE</span>
                <a href="tel:+16024763358">
                  <div className="footer-phone-link">
                    <span>602-476-3358</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-bottom-bar">
              <p className="footer-legal">
                <span>
                  {' '}
                  &amp;copy;
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span id="current-year">2024</span>
                <span>
                  {' '}
                  Ramirez Tile. All Rights Reserved. Licensed &amp; Insured. ROC
                  #345678.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
              <div className="footer-legal-links">
                <a href="/privacy-policy">
                  <div className="footer-bottom-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <span aria-hidden="true" className="footer-bullet">
                  &amp;bull;
                </span>
                <a href="/terms-of-service">
                  <div className="footer-bottom-link">
                    <span>Terms of Service</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <button
            id="scroll-to-top"
            aria-label="Scroll to top"
            className="footer-scroll-btn"
          >
            <svg
              fill="none"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 12l7-7l7 7m-7 7V5"></path>
            </svg>
          </button>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-logic">
(function(){
  // Set current year
  const yearSpan = document.getElementById("current-year")
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear()
  }

  // Scroll to Top Logic
  const scrollBtn = document.getElementById("scroll-to-top")

  window.addEventListener("scroll", () => {
    // Show button after scrolling 500px (roughly past hero)
    if (window.scrollY > 500) {
      scrollBtn.classList.add("is-visible")
    } else {
      scrollBtn.classList.remove("is-visible")
    }
  })

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Accessible Focus States for footer links
  const footerLinks = document.querySelectorAll(".footer-wrapper a, .footer-wrapper button")
  footerLinks.forEach((link) => {
    link.addEventListener("focus", () => {
      link.style.outline = "2px solid var(--color-secondary)"
      link.style.outlineOffset = "4px"
    })
    link.addEventListener("blur", () => {
      link.style.outline = "none"
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
