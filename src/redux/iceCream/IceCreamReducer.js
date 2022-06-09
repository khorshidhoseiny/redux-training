import { BUY_ICECREAM } from "./IceCreamTypes";

const initialState = {
	NumOfIceCream: 50,
};

const IceCreamReducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_ICECREAM:
			return { ...state, NumOfIceCream: state.NumOfIceCream - 1 };
		default:
			return state;
	}
};
export default IceCreamReducer;
