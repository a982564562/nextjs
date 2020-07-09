import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const props = await Document.getInitialProps(ctx);

		return {
			...props
		};
	}

	render() {
		return (
			<html lang="zh">
				<Head>
					<meta name="baidu-site-verification" content="wJnXUu7oWX" />
					<meta name="sogou_site_verification" content="I3MGYss0Xn" />
					<meta
						name="360-site-verification"
						content="26c5ef263cb90871f06a00f787ac0ba5"
					/>
					<meta
						httpEquiv="X-UA-Compatible"
						content="IE=edge,chrome=1"
					/>
					<meta name="format-detection" content="telephone=no" />
					<link
						rel="shortcut icon"
						type="image/x-icon"
						href="http://www.sof.cn/static/front/imgs/favicon.ico"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="//at.alicdn.com/t/font_1900096_uf49se6me0o.css"
					/>
					<link rel="stylesheet" href="../../static/global.css" />
					<link
						rel="stylesheet"
						href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/css/bootstrap.min.css"
						integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
						crossOrigin="anonymous"
					/>
					<style jsx global>{`
						#__next {
							width: 100%;
							height: 100%;
						}
						.no-wrap {
							overflow: hidden;
							white-space: nowrap;
							text-overflow: ellipsis;
						}
						.tags {
							margin: 0;
						}
						.tags > li {
							display: inline-block;
							padding: 6px 5px;
							border-radius: 2px;
							font-size: 12px;
							line-height: 12px;
							font-weight: 500;
							margin-right: 6px;
						}
						.scrollbar::-webkit-scrollbar {
							/**滚动条整体部分 */
							width: 10px;
							height: 10px;
						}
						.scrollbar::-webkit-scrollbar-track {
							/**滚动条的轨道（里面装有Thumb） */
							/* background: rgb(239, 239, 239); */
							border-radius: 2px;
						}
						.scrollbar::-webkit-scrollbar-thumb {
							/**滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条） */
							background: #dddfe0;
							border-radius: 10px;
						}
					`}</style>
				</Head>
				<body>
					<Main />
					<NextScript />
					<script
						src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
						integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
						crossOrigin="anonymous"
					></script>
					<script
						src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
						integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
						crossOrigin="anonymous"
					></script>
					<script
						src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.0/dist/js/bootstrap.min.js"
						integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
						crossOrigin="anonymous"
					></script>
				</body>
			</html>
		);
	}
}

export default MyDocument;
