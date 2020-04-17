import React, { useState, useEffect } from "react";
import SizingGuide from "./Sizing.jsx";
import SideBarAccordian from "./SideBarAccordian.jsx";
import Description from "./Description.jsx";
import Headline from "./Headline.jsx";
import Colorway from './Colorway.jsx'
import BuyButtons from './BuyButtons.jsx'

const SideBar = ({ currentShoe, updateCurrentOrder, purchaseShoe, shoeSet, setColorWayShoe, isValidOrder}) => {
	return (
		<div id='sidebar_nl'>
			<div id='sidebar_contents'>
				<Headline currentShoe={currentShoe} />
				<Colorway currentShoe={currentShoe} shoeSet={shoeSet} setColorWayShoe={setColorWayShoe} currentShoe={currentShoe}/>
				<SizingGuide currentShoe={currentShoe} updateCurrentOrder={updateCurrentOrder} isValidOrder={isValidOrder}/>
				<BuyButtons currentShoe={currentShoe} purchaseShoe={purchaseShoe} />
				<Description currentShoe={currentShoe} />
				<SideBarAccordian currentShoe={currentShoe} />
			</div>
		</div>
	);
};


export default SideBar;
