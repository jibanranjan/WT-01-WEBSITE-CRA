import React from 'react'
import './SecondComp.css'

function SecondComp() {
  return (
    <div className='featuresMaindiv'>
        <div className='featureHeading'><h2>Our Features</h2></div>

        <div className='iconMainDiv'>

                     <div className='firstColumn'>  
                                    <div className='icondiv'><i class="fa-solid fa-desktop"></i></div>
                                    
                                    <div className='iconText'>
                                        <h3>Fully Responsive</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, linkIcon distinctio.</p>
                                        <a className='linkIcon' href=' '>Read More</a>

                                    </div>
                            
                            </div>


                            <div className='secondColumn'>  
                                    <div className='icondiv'><i class="fa-solid fa-user"></i></div>
                                    
                                    <div className='iconText'>
                                        <h3>Trusted Authors</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, linkIcon distinctio.</p>
                                        <a className='linkIcon' href=' '>Read More</a>

                                    </div>
                            
                            </div>





                            <div className='thirdColumn'>  
                                    <div className='icondiv'><i class="fa-solid fa-recycle"></i></div>
                                    
                                    <div className='iconText'>
                                        <h3>Reusable Elements</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, linkIcon distinctio.</p>
                                        <a className='linkIcon' href=' '>Read More</a>

                                    </div>
                            
                            </div>





        </div>

    </div>
  )
}

export default SecondComp