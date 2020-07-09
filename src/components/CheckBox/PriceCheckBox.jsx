import React from "react";
import Panel from "./Panel";
import CheckBox from "./CheckBox";
import "./style.less";

export default () => {
	return (
		<Panel defaultValue="价格">
			<CheckBox />
			<div>
				<div>
					<input type="text" />-
					<input type="text" />万
				</div>
				<div>
					<button>取消</button>
					<button>确认</button>
				</div>
			</div>
		</Panel>
	);
};
