import { combineReducers } from "redux";
import headReducer from "./headReducer";

const initalState = {
	cityId: null,
	districtId: null,
	cityName: "温州"
};

const CHANGE_REGION = "REGION/CHANGE_REGION";
export const changeRegion = data => ({
	type: CHANGE_REGION,
	data
});

const initalReducer = (state = initalState, action) => {
	switch (action.type) {
		case CHANGE_REGION:
			return action.data;
		default:
			return state;
	}
};

export default combineReducers({
	init: initalReducer,
	head: headReducer
});
