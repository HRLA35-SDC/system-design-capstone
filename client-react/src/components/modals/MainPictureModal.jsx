import React from 'react'


const MainPictureModal = ({removeModal, currentShoe}) => {
  return (
    <div className='modal'>
        <div className='close_modal' onClick={removeModal}>x</div>
        <div className='modal_scroll'>
    {/*       <div id='modal_headline'>
            <div id='modal_price'>
              <h2>{currentShoe.type}</h2>
              <div>$ {currentShoe.price}</div>
            </div>
            <h1 id='modal_product_title'>{currentShoe.name}</h1>
          </div> */}
          <div className='modal_pic_scroll'>
            {currentShoe.productPictures.map((picSrc, index) => {
              if(picSrc.includes('.jpg')){
                return (
                  <img src={picSrc} key={index} id="modal_pic_nl" alt={currentShoe.name} />
                )
              } else if (picSrc.includes('.webm')){
                  return (
                    <video src={picSrc} autoPlay loop key={index} id="modal_pic_nl" alt={currentShoe.name} />
                  )
                }
              })}
          </div>
        </div>
    </div>
  )
}

export default MainPictureModal