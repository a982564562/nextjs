import React, { useRef, useState } from "react";
import Layer from "../Layer";

const types = {
	"11": {
		code: "new",
		name: "新房"
	},
	"12": {
		code: "secondhand",
		name: "二手房"
	},
	"13": {
		code: "rent",
		name: "租房"
	},
	"14": {
		code: "commerce",
		name: "商业地产"
	}
};

export default () => {
	const inputRef = useRef();
	const [isShow, setIsShow] = useState(false),
		[type, setType] = useState({ code: "new", name: "新房" });

	const toggleTypePanel = () => {
		setIsShow(isShow => !isShow);
	};
	const clickType = e => {
		const { nodeName, value } = e.target;

		if (nodeName === "UL") {
			return;
		}

		const type = types[value];
		setType(type);
		toggleTypePanel();
	};
	const hideTypePanel = () => {
		setIsShow(false);
	};

	return (
		<div className="hd-search-bar">
			<div className="hd-search-type">
				<div className="hd-search-content" onClick={toggleTypePanel}>
					<span>{type.name}</span>
					<i>1</i>
				</div>
				{isShow && (
					<>
						<ul onClick={clickType}>
							<li value="11">新房</li>
							<li value="12">二手房</li>
							<li value="13">租房</li>
							<li value="14">商业地产</li>
						</ul>
						<Layer callback={hideTypePanel} />
					</>
				)}
			</div>
			<div className="hd-search-right">
				<input ref={inputRef} placeholder="请输入房源标题" />
				<button>我要找房</button>
			</div>
		</div>
	);
};
