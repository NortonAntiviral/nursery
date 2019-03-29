import React, { Component } from 'react';

export default class CartBtn extends Component {
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
			<a href="#" className="cart-link">
				Cart
				<span>
					<div>14</div>
				</span>
			</a>
		);
	}
}
