import React from 'react'
import './ThirdComp.css'

function ThirdComp() {
  return (
    <div className='mainthrdimgDiv'>

                <div className='chip-photo'>
                    <img src="https://wallpapercrafter.com/desktop/240239-50mm-canon-leica-and-iphone-hd.jpg" />
                </div>

                <div className='photo-content'>
                              
                              <div className='trophyColumn'>
                              <i class="fa-solid  fa-3x fa-trophy"></i>
                              <h2 className='noicon'>22</h2>
                              <p>Awards Winning</p>
                              </div>

                              <div className='bagColumn'>
                              <i class="fa-solid  fa-3x fa-suitcase"></i>
                              <h2>145</h2>
                              <p>Finished Projects</p>
                              </div>

                              <div className='trophyColumn'>
                              <i class="fa-solid  fa-3x fa-car"></i>
                              <h2>349</h2>
                              <p>Products Sold</p>
                              </div>

                              <div className='trophyColumn'>
                              <i class="fa-brands  fa-3x fa-twitter"></i>
                              <h2>2456</h2>
                              <p>Twitter Fans</p>
                              </div>

                              

                </div>

  
        

    </div>
  )
}

export default ThirdComp