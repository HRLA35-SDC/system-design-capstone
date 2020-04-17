import React from 'react'


const PurchaseModal = ({currentShoe, closePurchaseShoe}) => {
  return (
    <div className='purchase_modal'>
      <div className='purchase_modal_detail_box'>
        <div className='purchase_modal_headline'>
          <p><i className="fas fa-check-circle"></i> Added To Cart!</p>
          <div onClick={closePurchaseShoe}>X</div>
        </div>
        <div className='purchase_modal_product'>
          <div className='purchase_modal_product_pic'>
            <img src={currentShoe.productPictures[0]}></img>
          </div>
          <div>
            <h4>{currentShoe.name}</h4>
            <p>Size: </p>
            <p>$ {currentShoe.price}</p>
          </div>
        </div>

        <div className='purchase_modal_buttons'>
          <button className='cartbtn viewCartbtn'>View Cart</button>
          <button className='cartbtn checkoutBtn'>Checkout</button>
        </div>
      </div>
    </div>
  )
}


export default PurchaseModal