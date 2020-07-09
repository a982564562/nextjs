import React, { useState } from "react";
// import Layer from "../Layer";

export default ({ icon, defaultValue, value, children }) => {
	const [isShow, setIsShow] = useState(true);

	const showPanel = () => setIsShow(true);
	// const closePanel = () => setIsShow(false);

	return (
		<div className="select" onClick={showPanel}>
			<span>{value || defaultValue}</span>
			{icon}
			{isShow && (
				<>
					<div className="select-panel">{children}</div>
					{/* <Layer callback={closePanel} /> */}
				</>
			)}
		</div>
	);
};
