import React from "react";
import Link from "next/link";
import { recommendHouses } from "test/index_data";

export default () => {
	return (
		<div className="front-recommend-house">
			<h2>
				最新好房<span>查看更多 &gt;&gt;</span>
			</h2>
			<ul>
				{recommendHouses.map(item => (
					<li key={item.id}>
						<Link href="/">
							<img src={item.photo} />
						</Link>
						<div>
							<Link href="/">
								<h4 className="no-wrap">{item.name}</h4>
							</Link>
							<p>
								{item.room}室{item.hall}厅{item.toilet}
								卫&nbsp;&nbsp;&nbsp;&nbsp;{item.area}m²
							</p>
							<div>
								<span>{item.unit}元/m²</span>
								<span>
									<strong>{item.price}</strong>万
								</span>
							</div>
						</div>
					</li>
				))}
				<li className="front-map-house">
					<img />
					<div>
						<Link href="/map">
							<h4>地图找房</h4>
						</Link>
						<span>精准定位附近找房，满足你的个性需求</span>
					</div>
				</li>
			</ul>
		</div>
	);
};
