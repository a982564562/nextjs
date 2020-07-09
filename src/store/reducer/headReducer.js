const CHANGE_HEAD_INFO = "HEAD/CHANGE_HEAD_INFO";

const defaultState = {
	keywords: "",
	description: "",
	title: ""
};

export const changeHeadInfo = data => ({
	type: CHANGE_HEAD_INFO,
	data
});

export default (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_HEAD_INFO:
			return action.data;
		default:
			return state;
	}
};
