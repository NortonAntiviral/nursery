const initialState = {
	popupCartOpen: false
};

let newState;

export const appStateReducer = (State = initialState, action) => {
	switch (key) {
		case 'OPEN_CART':
			newState = Object.assign({}, state, {
				popupCartOpen: true
			});
			break;

		default:
			return state;
			break;
	}
};
