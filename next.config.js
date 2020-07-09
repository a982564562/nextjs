const withCSS = require("@zeit/next-css");
const withLess = require("@zeit/next-less");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const path = require("path");

typeof require !== "undefined" && (require.extensions[".scss"] = () => {});

module.exports = withBundleAnalyzer(
	withLess(
		withCSS({
			cssModules: true,
			cssLoaderOptions: {
				importLoaders: 1,
				// localIdentName: "[local]___[hash:base64:5]"
				localIdentName: "[local]"
			},
			lessLoaderOptions: {
				javascriptEnabled: true
			},
			webpack: (config, {}) => {
				config.resolve.alias["private-next-pages"] = path.resolve(
					__dirname,
					"./src/pages"
				);
				config.module.rules.unshift({
					test: /\.(js|mjs|jsx|ts|tsx)$/,
					enforce: "pre",
					use: [
						{
							options: {
								cache: true,
								formatter: require.resolve(
									"react-dev-utils/eslintFormatter"
								),
								eslintPath: require.resolve("eslint"),
								resolvePluginsRelativeTo: __dirname
							},
							loader: require.resolve("eslint-loader")
						}
					],
					exclude: /node_modules/
				});
				return config;
			},
			exportPathMap: async () => {
				return {
					"/new/": {
						page: "/new"
					},
					"/secondhand/": {
						page: "/secondhand"
					},
					"/rent/": {
						page: "/rent"
					},
					"/commerce/": {
						page: "/commerce"
					}
				};
			},
			analyzeBrowser: ["browser", "both"].includes(
				process.env.BUNDLE_ANALYZE
			),
			bundleAnalyzerConfig: {
				server: {
					analyzerMode: "static",
					reportFilename: "../bundles/server.html"
				},
				browser: {
					analyzerMode: "static",
					reportFilename: "../bundles/client.html"
				}
			}
		})
	)
);
