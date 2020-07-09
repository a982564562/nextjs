import React, { useState } from "react";
import Layer from "../Layer";

export default () => {
	const [isMore, setIsMore] = useState(false);

	const showMore = () => setIsMore(isMore => !isMore);

	const hideMore = () => setIsMore(false);

	return (
		<div className="hd-more">
			<i onClick={showMore}></i>
			{isMore && (
				<>
					<ul className="m-0 hd-more-panel" onClick={hideMore}>
						<li>品牌公寓</li>
						<li>个人房源</li>
						<li>小户型</li>
						<li>免税房源</li>
						<li>店铺转让</li>
						<li>白领租房</li>
					</ul>
					<Layer callback={hideMore} />
				</>
			)}
		</div>
	);
};
