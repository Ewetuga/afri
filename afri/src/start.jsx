import './App.css'
import React, { useRef, useEffect, useState } from 'react'
import samsung1 from './assets/samsung1.jpg'
import samsung2 from './assets/samsung2.jpg'
import woman from './assets/woman.jpg'

function Start() {
  const steps = [
    {
      title: 'Get Transacting',
      desc: 'Download the Hizo mobile app from your App Store or Play Store.',
      img: samsung1
    },
    {
      title: 'Create Your Account',
      desc: 'Sign up quickly and securely to get started.',
      img: samsung2
    },
    {
      title: 'Start Using Hizo',
      desc: 'Enjoy seamless payments and transfers across Africa.',
      img: woman
    }
  ]

  // Stable refs array
  const stepRefs = useRef(steps.map(() => React.createRef()))
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2
      const distances = stepRefs.current.map(ref =>
        ref.current ? Math.abs(ref.current.getBoundingClientRect().top - viewportCenter) : Infinity
      )
      const minIndex = distances.indexOf(Math.min(...distances))
      setActiveStep(minIndex)
      console.log('Active step:', minIndex, 'Distances:', distances)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="start-all">
      <h1>Get <span>Started </span>in 3 Simple Steps</h1>
      <div className="start-all-flex">
        <div className="stacked-images-container">
          {steps.map((step, idx) => (
            <img
              key={idx}
              src={step.img}
              alt={`step-${idx + 1}`}
              className={`stacked-step-img${activeStep === idx ? ' active' : ''}`}
            />
          ))}
        </div>
        <div className="download-b">
          {steps.map((step, idx) => {
            let cardClass = 'download-1';
            if (activeStep === idx) cardClass += ' active';
            if (activeStep > idx) cardClass += ' checked';
            return (
              <div
                className={cardClass}
                key={idx}
                ref={stepRefs.current[idx]}
              >
                <div>
                  {activeStep > idx ? (
                    <span className="checkmark">✔</span>
                  ) : (
                    <span>{idx + 1}</span>
                  )}
                  <h2>{step.title}</h2>
                  <p>{step.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Start