import React, { useState } from "react";
import Search from "./Search";
import HouseItem from "./HouseItem";

export default () => {
	const [isShow, setIsShow] = useState(false);

	const changeIsShow = () => setIsShow(isShow => !isShow);

	const hide = isShow ? "" : "hide";

	return (
		<div className={`map-house ${hide}`}>
			<div>
				<Search />
				<div className="map-house-list scrollbar">
					<HouseItem />
					<HouseItem />
					<HouseItem />
					<HouseItem />
					<HouseItem />
					<HouseItem />
				</div>
			</div>
			<button onClick={changeIsShow}>
				<i className={`iconfont icon-right ${hide}`}></i>
			</button>
		</div>
	);
};
