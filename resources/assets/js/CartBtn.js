import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<div href="#" class="cart-link">
				Cart
				<span>
					<div>14</div>
				</span>
			</div>
		);
	}
}

const cartBtn = document.getElementById('cartBtn');

ReactDOM.render(<Layout />, cartBtn);
