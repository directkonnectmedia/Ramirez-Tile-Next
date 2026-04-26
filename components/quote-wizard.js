import React, { useEffect, useState } from 'react'

const TIMELINES = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-month', label: 'Within 1 month' },
  { value: '1-3-months', label: '1–3 months' },
  { value: '3-plus', label: '3+ months' },
  { value: 'browsing', label: 'Just browsing' },
]

const PROJECT_SIZES = [
  { value: 'small', label: 'Small', meta: 'Under 150 sq ft' },
  { value: 'medium', label: 'Medium', meta: '150 – 400 sq ft' },
  { value: 'large', label: 'Large', meta: '400 – 800 sq ft' },
  { value: 'xl', label: 'Extra Large', meta: '800 sq ft and over' },
]

const STEP_LABELS = ['Timeline', 'Project', 'Contact']

const initialData = {
  timeline: '',
  size: '',
  description: '',
  name: '',
  phone: '',
  email: '',
}

const QuoteWizard = () => {
  const [step, setStep] = useState(1)
  const [data, setData] = useState(initialData)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (event) => {
    setData((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const goNext = () => {
    setError('')
    if (step === 1 && !data.timeline) {
      setError('Please pick a timeline.')
      return
    }
    if (step === 2 && !data.size) {
      setError('Pick a project size.')
      return
    }
    setStep((s) => s + 1)
  }

  const goBack = () => {
    setError('')
    setStep((s) => Math.max(1, s - 1))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setError('')
    if (!data.name.trim()) {
      setError('Please enter your full name.')
      return
    }
    if (!data.phone.trim() && !data.email.trim()) {
      setError('Please provide a phone number or email.')
      return
    }
    setSubmitted(true)
  }

  const closeModal = () => {
    setSubmitted(false)
    setStep(1)
    setData(initialData)
    setError('')
  }

  useEffect(() => {
    if (!submitted) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') closeModal()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted])

  return (
    <div className="wizard">
      <div className="wizard__progress" aria-label="Quote progress">
        {STEP_LABELS.map((label, index) => {
          const num = index + 1
          const cls = [
            'wizard__progress-step',
            num === step ? 'is-active' : '',
            num < step ? 'is-done' : '',
          ]
            .filter(Boolean)
            .join(' ')
          return (
            <div key={label} className={cls}>
              <span className="wizard__progress-dot">{num}</span>
              <span className="wizard__progress-label">{label}</span>
            </div>
          )
        })}
      </div>

      <form className="wizard__form" onSubmit={handleSubmit} noValidate>
        {step === 1 && (
          <fieldset className="wizard__step">
            <legend className="wizard__legend">
              When are you looking to start?
            </legend>
            <div className="wizard__options" role="radiogroup">
              {TIMELINES.map((opt) => {
                const active = data.timeline === opt.value
                return (
                  <button
                    type="button"
                    role="radio"
                    aria-checked={active}
                    key={opt.value}
                    className={`wizard__option${active ? ' is-active' : ''}`}
                    onClick={() =>
                      setData((prev) => ({ ...prev, timeline: opt.value }))
                    }
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="wizard__step">
            <legend className="wizard__legend">
              Tell us about your project
            </legend>
            <div className="wizard__field">
              <span className="wizard__label">Project size</span>
              <div
                className="wizard__options wizard__options--cols-4"
                role="radiogroup"
              >
                {PROJECT_SIZES.map((opt) => {
                  const active = data.size === opt.value
                  return (
                    <button
                      type="button"
                      role="radio"
                      aria-checked={active}
                      key={opt.value}
                      className={`wizard__option${active ? ' is-active' : ''}`}
                      onClick={() =>
                        setData((prev) => ({ ...prev, size: opt.value }))
                      }
                    >
                      <span className="wizard__option-label">{opt.label}</span>
                      <span className="wizard__option-meta">{opt.meta}</span>
                    </button>
                  )
                })}
              </div>
            </div>
            <label className="wizard__field">
              <span className="wizard__label">Additional details (optional)</span>
              <textarea
                className="wizard__textarea"
                rows={3}
                placeholder="Anything we should know — tile type, room, style, etc."
                value={data.description}
                onChange={update('description')}
              />
            </label>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset className="wizard__step">
            <legend className="wizard__legend">How can we reach you?</legend>
            <label className="wizard__field">
              <span className="wizard__label">Full name *</span>
              <input
                type="text"
                className="wizard__input"
                value={data.name}
                onChange={update('name')}
                required
              />
            </label>
            <label className="wizard__field">
              <span className="wizard__label">Phone</span>
              <input
                type="tel"
                className="wizard__input"
                placeholder="602-476-3358"
                value={data.phone}
                onChange={update('phone')}
              />
            </label>
            <label className="wizard__field">
              <span className="wizard__label">Email</span>
              <input
                type="email"
                className="wizard__input"
                placeholder="you@example.com"
                value={data.email}
                onChange={update('email')}
              />
            </label>
            <p className="wizard__hint">Provide phone, email, or both.</p>
          </fieldset>
        )}

        {error && (
          <p className="wizard__error" role="alert">
            {error}
          </p>
        )}

        <div className="wizard__buttons">
          {step > 1 && (
            <button
              type="button"
              className="btn btn-outline"
              onClick={goBack}
            >
              Back
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              className="btn btn-accent"
              onClick={goNext}
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button type="submit" className="btn btn-accent">
              Submit
            </button>
          )}
        </div>
      </form>

      {submitted && (
        <div
          className="wizard-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="wizard-modal-title"
          onClick={closeModal}
        >
          <div
            className="wizard-modal__panel"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="wizard-modal__close"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 id="wizard-modal-title" className="wizard-modal__title">
              Thank you for selecting Ramirez Tile
            </h3>
            <p className="wizard-modal__body">
              We&rsquo;ll be in touch shortly to talk through your project.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default QuoteWizard
