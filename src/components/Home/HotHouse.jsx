import React, { useState } from "react";
import Link from "next/link";

import { hotHouses } from "test/index_data";

export default () => {
	const [selectedIndex] = useState(0);
	return (
		<div className="front-hot">
			<ul className="front-hot-bar">
				<li className={selectedIndex === 0 ? "z-on" : ""}>人气楼盘</li>
				<li>优惠楼盘</li>
				<li>热门商业地产</li>
			</ul>
			<ul className="front-hot-content">
				{hotHouses.map(item => (
					<li key={item.id}>
						<Link href="/">
							<img src={item.photo} />
						</Link>
						<Link href="/">
							<h4 className="no-wrap">{item.name}</h4>
						</Link>
						<p>{item.unit}元/㎡</p>
						<p className="no-wrap">{item.address}</p>
						<ul>
							{item.tags.map(tag => (
								<li key={tag}>{tag}</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
};
