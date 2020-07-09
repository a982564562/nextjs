import React, { PureComponent } from "react";
import { getBMap } from "../common/utils";
import BMapComponent from "../components/BMap";

let BMap;

class BMapHouse extends PureComponent {
	render() {
		return <BMapComponent />;
	}
	async componentDidMount() {
		const map = await getBMap();
		BMap = window.BMap;
		this.map = map;
		map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
	}
	componentWillUnmount() {
		BMap = null;
	}
}

export default BMapHouse;
