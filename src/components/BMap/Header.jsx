import React from "react";
import Link from "next/link";
import PriceCheckBox from "../CheckBox/PriceCheckBox";

export default () => {
	return (
		<div className="map-header">
			<div className="map-header-left">
				<Link href="/">
					<img className="map-logo" src="/static/logo.png" alt="" />
				</Link>
				<a className="map-location">
					<i className="iconfont icon-location"></i>温州
				</a>
				<ul className="m-0 map-search">
					<li>全部区域</li>
					<li>
						<PriceCheckBox />
					</li>
					<li>房型</li>
					<li>面积</li>
					<li>更多</li>
				</ul>
				<button className="map-clear">清空筛选记录</button>
			</div>
			<ul className="m-0 map-navigation">
				<li>
					<Link href="/">
						<a>首页</a>
					</Link>
				</li>
				<li>
					<Link href="/new/">
						<a>新房</a>
					</Link>
				</li>
				<li>
					<Link href="/secondhand/">
						<a>二手房</a>
					</Link>
				</li>
				<li>
					<Link href="/rent/">
						<a>租房</a>
					</Link>
				</li>
				<li>
					<Link href="/commerce/">
						<a>商业地产</a>
					</Link>
				</li>
			</ul>
		</div>
	);
};
