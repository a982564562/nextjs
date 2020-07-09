import React from "react";
import "./style.less";

export default ({ callback }) => {
	const click = e => {
		const x = e.clientX;
		const y = e.clientY;

		callback();

		const timer = setTimeout(() => {
			clearTimeout(timer);

			const node = document.elementFromPoint(x, y);

			node.nodeName === "INPUT" ? node.focus() : node.click();
		}, 100);
	};

	return <div className="layer" onClick={click}></div>;
};
