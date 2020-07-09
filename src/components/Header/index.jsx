import React from "react";
import Link from "next/link";
import "./style.less";
import More from "./More";
import Search from "./Search";

export default () => {
	return (
		<div className="hd">
			<div className="w-1200 hd-content">
				<div className="hd-content-left">
					<Link href="/">
						<img
							className="hd-logo"
							src="/static/logo.png"
							alt=""
						/>
					</Link>
					<a className="hd-location">
						<i className="iconfont icon-location"></i>温州
					</a>
					<div className="d-inline-block">
						<ul className="m-0 hd-navigation">
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
						<More />
						<Search />
					</div>
				</div>
				<div className="hd-user">
					<div>
						<i></i>
						<a>登录</a>
						<a>注册</a>
					</div>
					<button className="hd-user-sell">我要卖房</button>
					<button className="hd-user-buy">我要买房</button>
				</div>
			</div>
			<div className="hd-download">
				<span>
					<i className="iconfont icon-download"></i>下载房娃APP
				</span>
				<img className="code" src="/static/download.png" />
			</div>
		</div>
	);
};
