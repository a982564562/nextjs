import React from "react";
import "./style.less";
import Header from "./Header";
import House from "./House";

export default () => {
	return (
		<div className="map">
			<Header />
			<House />
			<div id="allmap"></div>
		</div>
	);
};
