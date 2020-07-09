import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducer";
import clientApi from "../server/clientApi";
import serverApi from "../server/serverApi";

export default function initializeStore(state, isServer) {
	const store = createStore(
		reducer,
		Object.assign({}, state),
		composeWithDevTools(
			applyMiddleware(
				thunk.withExtraArgument(isServer ? serverApi() : clientApi)
			)
		)
	);

	return store;
}
