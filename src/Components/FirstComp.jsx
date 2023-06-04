import React from 'react'
import './FirstComp.css'

function FirstComp() {
  return (
    <div className='first-main-img-div'>
        
          <div className='lapDiv'>
          <img  className='lapphoto' src="https://www.macworld.com/wp-content/uploads/2023/01/macbook-air-silicon-vs-macbook-air-2020-main.png?w=1024" />
        
          </div>

         <div className='lapContent'>
            <h2>Your Awesome Business Theme</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus minus facere ab facilis maxime quia placeat dolore nobis aspernatur obcaecati?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus min?</p>
              <button className='readMore'>Read More</button>
         </div>
        
    </div>
  )
}

export default FirstComp