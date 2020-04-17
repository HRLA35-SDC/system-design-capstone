import React from 'react'

const BuyButtons = ({ purchaseShoe}) => {
	//going to take ID/Size
	return (
		<div id='button_wrapper'>
			<button className='add_to_cart cartbtn' onClick={purchaseShoe}>
				Add To Cart
			</button>
			<button className='favorite cartbtn'>
				Favorite <i className='far fa-heart'></i>
			</button>
		</div>
	);
};



export default BuyButtons