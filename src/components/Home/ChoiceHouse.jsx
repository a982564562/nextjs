import React from "react";
import Link from "next/link";
import { choiceHouses } from "test/index_data";

export default () => {
	return (
		<div className="front-choice-house">
			<h2>
				精选房型<span>查看更多 &gt;&gt;</span>
			</h2>
			<ul>
				{choiceHouses.map(item => (
					<Link key={item.id} href="/">
						<li>
							<img src={item.photo} />
							<div>
								<span>{item.name}</span>
								<span>.</span>
								<span>
									{item.apartName} {item.room}室{item.hall}厅
									{item.toilet}卫 {item.area}㎡
								</span>
							</div>
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
};
