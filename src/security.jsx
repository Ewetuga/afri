import './App.css'
import React from 'react'
import bgvide from './assets/tiny.mp4'
import fox from './assets/fox.jpg'
import lock from './assets/lock.jpg'

function Security(){
    return(<>
    {/* Start of security section */}
    <div className="security">

      {/* Background video */}
      <video className="security-bg-video" autoPlay loop muted playsInline>
        <source src={bgvide} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for rgba tint */}
      <div className="security-overlay"></div>
      
      {/* Main security content */}
      <div className="security-content">
        {/* Top content: image and heading */}
        <div className="security-content-1">
          <p><img src={fox} alt="fox-image"/></p>
          <h2>Your <span>Security </span>Matters</h2>
          <p>&#10024; Your money is 100% safe with us</p>
        </div>

        {/* Security details section */}
        <div className="security-content-2">

          <div className="boss">

            <div className="boss-1">

              <div className="numbers">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
              </div>

              <div className="end">
                <h2>End-to-End Encryption</h2>
                <p>Your data is fully protected from the moment it leaves your device to when it reaches us.</p>
                <p className='arrow'><span>&larr;</span> <span>&rarr;</span></p>
              </div>

              </div>
              {/* end of boss-1 */}

              {/*boss-2*/}
              <div className="boss-2">
<img src={lock} alt="lock-img" />
              </div>
              {/*end of boss-2*/}

            </div>
            {/*end of boss*/}

          
        </div>
        {/* end of security content 2 */}

      </div>
      {/* End of main security content */}
    </div>
    {/* End of security section */}
    </>)
}

export default Security
