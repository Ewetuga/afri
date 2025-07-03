import './App.css'
import React, { useState, useEffect } from 'react'
import call from './assets/call.png'
import bag from './assets/bag.png'
import film from './assets/film.png'
import geo from './assets/geo.jpg'
import nigeria from './assets/nigeria.png'
import south from './assets/south.jpg'
import ghana from './assets/ghana.png'

function Power() {
  // Carousel features array
  const features = [
    {
      key: 'travel',
      content: (
        <>
          <span><img className="every-3-img" src={geo} alt="geo-img" /></span>
          <h2>Travel-Ready payments</h2>
          <p>We are facilitating and simplifying intra-Africa payment.</p>
        </>
      )
    },
    {
      key: 'instant',
      content: (
        <>
          <span><img className="every-3-img" src={bag} alt="bag-img" /></span>
          <h2>Instant Currency Conversion</h2>
          <p>Quickly convert Naira to local currencies using live rates, so you always know what you're spending.</p>
        </>
      )
    },
    {
      key: 'support',
      content: (
        <>
          <span><img className="every-3-img" src={bag} alt="support-img" /></span>
          <h2>24/7 Customer Support</h2>
          <p>Get help whenever you need it—your friends with us are always online to assist you.</p>
        </>
      )
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');

  // Automatic slider for mobile
  useEffect(() => {
    const isMobile = () => window.innerWidth <= 700;
    if (!isMobile()) return;
    const interval = setInterval(() => {
      setSlideDirection('left');
      setTimeout(() => {
        setActiveIndex(i => (i + 1) % features.length);
        setSlideDirection('');
      }, 400); // match CSS transition duration
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 700;

  return (
    <>
      <div className='every'>
        <div className="every-1">
          <h2>Powering <span>Everyday</span> &#127757;</h2>
          <h2> <span>Payments</span> Across Africa</h2>
        </div>
        <div className="every-2">
          <p>&#10024; Experience fast, safe, and flexible payments across Africa with just one app made for your everyday money needs.</p>
        </div>
      </div>
      <div className="every-3">
        {isMobile ? (
          features.map((feature, idx) => (
            <div
              key={feature.key}
              className={`every-3-slide ${feature.key}-slide${activeIndex === idx ? ' active' : ''}${slideDirection && activeIndex === idx ? ' slide-' + slideDirection : ''}`}
              style={{ display: activeIndex === idx ? 'flex' : 'none' }}
            >
              <div className="every-3-content">
                {feature.content}
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="every-3-1">
              <div className="travel every-3-content">{features[0].content}</div>
              <div className="instant every-3-content">{features[1].content}</div>
            </div>
            <div className="every-3-2">
              <div className="support every-3-content">{features[2].content}</div>
            </div>
          </>
        )}
      </div>
      {/*countries*/}
      <div className="countries-container">
        <div className="countries">
          <span><img src={ghana} alt="ghana" /></span>
          <span><img src={nigeria} alt="ghana" /></span>
          <span><img src={south} alt="ghana" /></span>
          <span><img src={ghana} alt="ghana" /></span>
          <span><img src={nigeria} alt="ghana" /></span>
          <span><img src={ghana} alt="ghana" /></span>
          <span> <img src={south} alt="ghana" /></span>
          <span><img src={nigeria} alt="ghana" /></span>
          <span><img src={south} alt="ghana" /></span>
          <span><img src={ghana} alt="ghana" /></span>
          <span><img src={nigeria} alt="ghana" /></span>
          <span><img src={south} alt="ghana" /></span>
          <span><img src={south} alt="ghana" /></span>
          <span><img src={ghana} alt="ghana" /></span>
          <span><img src={nigeria} alt="ghana" /></span>
          <span><img src={south} alt="ghana" /></span>
        </div>
      </div>
    </>
  );
}
export default Power
