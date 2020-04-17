import React from 'react'

const Headline = ({currentShoe}) => {


  return(
    <div className='sidebar_headline'>
      <div className='sidebar_headline_product'>
        <div>{currentShoe.type}</div>
        <h2 className='sidebar_product_title'>{currentShoe.name}</h2>
      </div>
      <div className='sidebar_headline_price'>
        <div>$ {currentShoe.discountPrice}.00</div>
        <div className='sidebar_headline_price_discounted_nl'>${currentShoe.price}</div>
      </div>
    </div>
  )
}

export default Headline