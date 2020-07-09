import React from "react";
import "./style.less";

export default () => {
	return (
		<div className="ft">
			<div className="w-1200 ft-header">
				<img />
				<ul className="ft-links">
					<li>
						<a>关于房娃</a>
					</li>
					<li>
						<a>商务合作</a>
					</li>
					<li>
						<a>新手指南</a>
					</li>
					<li>
						<a>版权申明</a>
					</li>
				</ul>
			</div>
			<div className="w-1200 ft-content">
				<div className="ft-content-left">
					<i className="iconfont icon-phone"></i>
					<div>
						<h4>服务热线:&nbsp;</h4>
						<h1>0577-62529159</h1>
						<span>(周一至周日 09: 00 - 21: 00)</span>
					</div>
				</div>
				<div className="ft-content-middle">
					<div className="ft-download">
						<img src="/static/download.png" alt="" />
						<span className="">扫码下载房娃APP</span>
					</div>
					<div className="ft-mini-program">
						<img src="/static/mini_program.png" alt="" />
						<span className="">扫码关注房娃小程序</span>
					</div>
				</div>
				<div className="ft-content-right">
					<ul className="ft-links">
						<li>
							<a>联系我们</a>
						</li>
						<li>
							<a>服务条款</a>
						</li>
						<li>
							<a>常见问题</a>
						</li>
						<li>
							<a>免责申明</a>
						</li>
					</ul>
				</div>
			</div>
			<ul className="w-1200 ft-footer">
				<li>房娃网络科技有限公司 版权所有</li>
				<li>
					<a>
						<img src="/static/icp.png" alt="" />
						<span>浙ICP备16003653号-2</span>
					</a>
				</li>
				<li>
					<a>
						<img src="/static/gongwangan.png" alt="" />
						<span>浙公网安备 33038202004103号</span>
					</a>
				</li>
			</ul>
		</div>
	);
};
