import React from 'react'
import './FourthEndComp.css'

function FourthEndComp() {
  return (
    <div className='footerDiv'>

                             <div className='firstDiv'>
                               <div className='titleh4'><h4>ABOUT FLEX BUSINESS PRO</h4></div> 
                                <p> Accusamus quos suscipit in ipsum sequi delectus fugiat, libero blanditiis? Dignissimos dicta vel vero et reiciendis.loremsit amet consectetur adipisicing elit. Illum, eum fugit? Accusamus quos suscipit ullam iure excepturi, in ipsum sequi delectus fugiat, libero blanditiis? </p>
                             </div>

                             <div className='secondDiv'>
                                <div className='titleh4'><h4>RECENT POSTS</h4></div>

                                <div className='titlerecent'>
                                    <h4>Fly to London</h4>
                                    <p>septer 18, 2016</p>
                                </div>


                                <div className='titlerecent' >
                                <h4>stair communication</h4>
                                    <p>septer 18, 2016</p>
                                </div>


                                <div className='titlerecent'>
                                <h4>Do you want to be a robot?</h4>
                                    <p>septer 18, 2016</p>
                                </div>
                                      
                             </div>



                             <div className='galleryDiv'>
                                <h4>Galleries</h4>
                                <div class="small-grid-container">
  <div class="small-grid-item">
    <img src="https://m.media-amazon.com/images/I/51r86zHkJwL._SL1200_.jpg" alt="Image 1" />
  </div>
  <div class="small-grid-item">
    <img src="data:image/jpeg;base64,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" alt="Image 2" />
  </div>
  <div class="small-grid-item">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20UDLuQd18fQIE2_XO1EU_CpDDki_A1KLew&usqp=CAU" alt="Image 3 "/>
  </div>
  <div class="small-grid-item">
    <img src="data:image/jpeg;base64,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" alt="Image 4" />
  </div>
  <div class="small-grid-item">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCeanulNZO63sYcSU9opFCfVgekNRY0c0Pmw&usqp=CAU" alt="Image 5" />
  </div>
  <div class="small-grid-item">
    <img src="https://cdn.shopify.com/s/files/1/0332/3917/1117/products/1_f50b5f2d-ec1e-41a7-bd46-7b039bdcd5ce_500x700.jpg?v=1643608967" alt="Image 6" />
  </div>
  <div class="small-grid-item">
    <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Raspberry_Pi_4_Model_B.jpg" alt="Image 7" />
  </div>
  <div class="small-grid-item">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsh2mBDOtILstmuDFEvZdOkiwHFtUs9_9PXw&usqp=CAU" alt="Image 8" />
  </div>
</div>
                             </div>


    </div>
  )
}

export default FourthEndComp