import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

import PurchaseModal from "./components/modals/PurchaseModal.jsx";
import SideBar from "./components/sidebar/SideBar.jsx";
import NykeMain from "./components/NykeMain/NykeMain.jsx";

import Fade from "./components/Portal&animation/Fade.jsx";

import shoeExample from "./mockData.js";


/*
Have to detect changes in the address bar

used history.pushState to change the URL so it doesn't refresh the browser

looks like you can detect an address change using something like this:

window.addEventListener("hashchange", myFunction());
        function myFunction() {
            alert(`${location.href}`);
        }
*/




class App extends React.Component {
	constructor() {
		super();
		this.state = {
			view: "feed",
			currentShoe: shoeExample,
			similiarShoes: [],
			currentOrder: {},
			submitOrder: false,
			validOrder: null,
		};

		this.updateCurrentOrder = this.updateCurrentOrder.bind(this);
		this.getShoeSet = this.getShoeSet.bind(this);
		this.purchaseShoe = this.purchaseShoe.bind(this);
		this.closePurchaseShoe = this.closePurchaseShoe.bind(this);

		this.setColorWayShoe = this.setColorWayShoe.bind(this)

	}
	// const [state, setState] = useState({view: 'Feed'})
	//const [showPurchaseModal, setShowPurchaseModal] = useState(false)

	//testurl
	//  /api/shoes/Nike React HyperSet Rise 4
	//  /api/shoes/Nike Odyssey React JoyRide CC 2
	componentDidMount() {
		this.getShoeSet();

		function searchForProductWhenHashChanges() {
			const pathArray = window.location.pathname.split('/');
			console.log(window.location.href)
			console.log(pathArray, 'THIS IS THE PATH ARRAY')
			//this.getShoeSet(pathArray[pathArray.length - 1])
		}


		window.addEventListener("hashchange", () => {
			console.log('THE HASH IS CHANGING', window.location.hash)
			let answer = window.location.hash.split('#')
			this.getShoeSet(answer[1]);
		});


	}

	getShoeSet(id) {

		if (id === undefined) {
			id = 12211
		}

		Axios.get(`/pg_search_id/${id}`)
			.then(response => {
				console.log("recieved", response.data)
				let shoe = response.data
				this.setState({
					currentShoe: response.data[0]
				});
			})

			// .then(shoe => {
			// 	Axios.get(`/search/${shoe.name}`)
			// 		.then(shoeset => {
			// 			console.log('recieved an object', shoeset.data)
			// 			this.setState({
			// 				currentShoe: shoe,
			// 				shoeSet: shoeset.data
			// 			});
			// 		})
			// })

			.catch((e) => {
				window.alert("Fetch Request For Nike Main Component Failed, SoMeThInGwEnTtErRiBlYwRoNg")
				this.setState({
					currentShoe: shoeExample,
				})
			});
	}




	setColorWayShoe(shoe) {
		this.setState({
			currentShoe: shoe
		})
		console.log(shoe.nikeID)
		//going to set the url with this function
		window.location.hash = shoe.nikeID;
	}




	purchaseShoe() {
		if (this.state.validOrder === null) {
			return this.setState({
				validOrder: false
			})
		}
		this.setState({
			confirmPurchase: true
		});
		return new Promise((res, rej) => {
			setTimeout(() => {
				this.closePurchaseShoe();
			}, 3000);
		});
	}
	closePurchaseShoe() {
		this.setState({
			currentOrder: {},
			confirmPurchase: false,
			validOrder: null
		});
	}
	//sizing chart selection
	updateCurrentOrder(orderKey, orderVal) {
		let { currentOrder } = this.state;
		const currentState = currentOrder;
		currentState[orderKey] = orderVal;
		this.setState({
			currentOrder: currentState,
			validOrder: true
		});
		//console.log(this.state.currentOrder);
	}




	render() {
		return (
			<div id='main_nl'>
				<div id='base_nl'>
					<NykeMain currentShoe={this.state.currentShoe} />
					<SideBar
						shoeSet={this.state.shoeSet}
						currentShoe={this.state.currentShoe}
						updateCurrentOrder={this.updateCurrentOrder}
						purchaseShoe={this.purchaseShoe}
						setColorWayShoe={this.setColorWayShoe}
						isValidOrder={this.state.validOrder}
					/>
					{this.state.confirmPurchase && (
						<Fade show={this.state.confirmPurchase}>
							<PurchaseModal currentShoe={this.state.currentShoe} closePurchaseShoe={this.closePurchaseShoe} />
						</Fade>
					)}
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("app_nick"));
