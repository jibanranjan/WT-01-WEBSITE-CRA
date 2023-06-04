import React from 'react'
import'./Header.css'

function Header() {
  return (
    <div className='main'>

                  <div className='leftPart'>
                      <h3>Flex Business Pro</h3>
                      <p>clean and Modern Business Theme</p>

                  </div>

                  <div className='RightPart'>
                    <a className='homeA' href=''>Home</a>
                    <a href=''>About Us</a>
                    <a href=''>Styleguide</a>
                    <a href=''>Blog</a>
                    <a href=''>Contact Us</a>

                  </div>

    </div>
  )
}

export default Header