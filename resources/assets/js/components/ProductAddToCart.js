import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ProductAddToCart extends Component {
	constructor() {
		super();
		this.state = {
			selectedSize: '',
			sizes: [
				4,
				4.5,
				5,
				5.5,
				6,
				6.5,
				7,
				7.5,
				8,
				8.5,
				9,
				9.5,
				10,
				10.5,
				11,
				11.5,
				12,
				12.5,
				13,
				13.5,
				14,
				14.5,
				15
			]
		};
	}
	showAllSizes = () => {
		return this.state.sizes.map(size => {
			return (
				<div
					className={`option ${
						this.state.selectedSize == size ? 'selected' : ''
					}`}
					key={size}
					onClick={this.clickedSize.bind(null, size)}
				>
					{size}
				</div>
			);
		});
	};
	clickedSize = selectedSize => {
		this.setState(
			{
				selectedSize
			},
			() => {
				console.log(this.state);
			}
		);
	};
	clickedAddToCartBtn = () => {
		if (this.state.selectedSize !== '') {
			console.log(`Added Product Size ${this.state.selectedSize}`);
		} else {
			console.log(`Please Add a Size`);
		}
	};
	render() {
		return (
			<div className="add-to-cart">
				<div className="detail-section">
					<div className="detail">
						<input type="checkbox" id="size-dropdown" className="toggle" />
						<label htmlFor="size-dropdown" className="title size-title">
							Sizes
						</label>
						<div className="content">
							<div className="sizes">{this.showAllSizes()}</div>
						</div>
					</div>
				</div>
				<div className="button-area">
					<div className="button" onClick={this.clickedAddToCartBtn}>
						Add to Cart
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<ProductAddToCart />,
	document.getElementById('ProductAddToCartRoot')
);
