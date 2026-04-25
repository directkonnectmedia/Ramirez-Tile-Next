import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const PHOTO_COUNT = 30

const photos = Array.from({ length: PHOTO_COUNT }, (_, index) => {
  const num = String(index + 1).padStart(2, '0')
  return `/gallery/${num}.jpg`
})

const Gallery = () => {
  const [activePhoto, setActivePhoto] = useState(null)

  useEffect(() => {
    if (!activePhoto) return undefined
    const handleKey = (event) => {
      if (event.key === 'Escape') setActivePhoto(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [activePhoto])

  return (
    <>
      <Head>
        <title>Gallery — Ramirez Tile</title>
        <meta property="og:title" content="Gallery — Ramirez Tile" />
        <meta
          name="description"
          content="A look at recent tile installations by Ramirez Tile across the Phoenix valley."
        />
      </Head>
      <Navigation></Navigation>
      <main className="gallery-page">
        <div className="gallery-page__container">
          <header className="gallery-page__header">
            <span className="gallery-page__eyebrow">PORTFOLIO</span>
            <h1 className="gallery-page__title">Our Gallery</h1>
          </header>
          <div className="gallery-grid">
            {photos.map((src, index) => (
              <button
                type="button"
                key={src}
                className="gallery-card"
                onClick={() => setActivePhoto(src)}
                aria-label={`Open photo ${index + 1}`}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="gallery-card__img"
                />
              </button>
            ))}
          </div>
        </div>
      </main>
      {activePhoto && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePhoto(null)}
        >
          <button
            type="button"
            className="gallery-lightbox__close"
            onClick={() => setActivePhoto(null)}
            aria-label="Close photo"
          >
            &times;
          </button>
          <img
            src={activePhoto}
            alt=""
            className="gallery-lightbox__img"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
      <Footer></Footer>
    </>
  )
}

export default Gallery
