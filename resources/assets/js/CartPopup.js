import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CartPopup extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Chris'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<a href="#" class="cart-link">
				Cart
				<span>
					<div>14</div>
				</span>
			</a>
		);
	}
}

const CartPopupRoot = document.getElementById('CartPopupRoot');

ReactDOM.render(<Layout />, CartPopup);