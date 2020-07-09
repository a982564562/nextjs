import React from "react";

const list = [
	{ code: "10", name: "50万以下" },
	{ code: "11", name: "50-100万" },
	{ code: "12", name: "100-150万" },
	{ code: "13", name: "150-200万" },
	{ code: "14", name: "200-250万" },
	{ code: "15", name: "250-300万" },
	{ code: "16", name: "300万以上" }
];

export default ({}) => {
	return (
		<ul className="checkbox">
			{list.map(item => (
				<li key={item.code}>
					<i className="iconfont icon-unselected"></i>
					{item.name}
				</li>
			))}
		</ul>
	);
};
