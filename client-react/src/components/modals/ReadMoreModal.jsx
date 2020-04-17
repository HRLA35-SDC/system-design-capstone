import React from 'react'


const ReadMoreModal = ({removeModal, currentShoe}) => {
  return (
    <div className='read_more_modal'>
          <div className='read_more_modal_headline'>
              <div className='read_more_modal_headline_content'onClick={removeModal}>
                <div className='read_more_modal_pic_wrapper'>
                  <img className='read_more_modal_pic'src={currentShoe.productPictures[0]}></img>
                </div>
                <div className='read_more_modal_headline_info'>
                  <p>{currentShoe.name}</p>
                  <p>$ {currentShoe.price}</p>
                </div>
              </div>
            <div className='read_more_modal_close' onClick={removeModal}>X</div>
          </div>

        <div className='read_more_modal_guts'>
          <div className='read_more_modal_info'>
              <div id='readMore_headline_text'>
                <b>BIG COMFORT. BIGGER PERSONALITY.</b>
              </div>
              <p>
                The Nike React Presto Premium features an innovative React foam midsole that delivers a futuristic look and bouncy, lightweight feel for all-day comfort with a whole lot of personality.
              </p>
              <div>
                <b>Benefits</b>
                <p> Nike React technology delivers an extremely smooth ride.
                    Stretchy mesh upper provides breathability and a relaxed feel.
                    Numerous lacing options let you customize the look.
                    Stretchy textile sleeve for a sock-like fit and lets you take the shoe on and off easily.
                    TPU cage reimagines the classic Presto cage in a more organic shape, providing a contoured fit to your foot.
                    Rubber toe tip enhances durability.
                </p>
              </div>
              <ul>
                <b>Product Details</b>
                <li>Not intended for use as Personal Protective Equipment</li>
                <li>Shown: {currentShoe.colorStyles.join('/')}</li>
                <li>Style: {currentShoe.productDetails.style}</li>
                <li>Offset: {currentShoe.productDetails.offset}</li>
                <li>Weight: {currentShoe.productDetails.weight}g</li>
                <li>Last: {currentShoe.productDetails.last}</li>
              </ul>
          </div>
        </div>
  </div>
  )
}



export default ReadMoreModal