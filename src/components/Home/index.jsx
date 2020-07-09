import React from "react";
import "./style.less";
import Banner from "./Banner";
import HotHouse from "./HotHouse";
import RecommendHouse from "./RecommendHouse";
import ChoiceHouse from "./ChoiceHouse";

export default () => {
	return (
		<div className="front">
			<Banner />
			<HotHouse />
			<RecommendHouse />
			<ChoiceHouse />
		</div>
	);
};
