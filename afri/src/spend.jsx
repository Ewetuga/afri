import './App.css'
import React from 'react'
import ghana from './assets/ghana.png'
import south from './assets/south.jpg'
import nigeria from './assets/nigeria.png'

function Spend(){
return(<>
<div className="major">
    <h1>Spend Your <span className='currency'>Currency</span>,</h1>
    <h1 className='pro'>Across <span className='connect'><img src={ghana} alt='ghana' className='ghana'/> <img src={south} alt='south'className='south'/> <img src={nigeria} alt='nigeria'className='nigeria'/></span>Africa</h1>
    <p >Hizo is connecting Africa with every transfer.</p>
    <div className="apple">
        <p> &#xF8FF;</p>
       <p className='hizo'>  Download Hizo App </p>
       <p>&#xf8ff;</p>
        
    </div>
</div>

</>)
}
export default Spend