import React from "react";
import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "../lib/with-redux";
import Head from "../components/Head";
import Header from "../components/Header";
import Footer from "../components/Footer";

class MyApp extends App {
	static async getInitialProps(ctx) {
		const { Component } = ctx;
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return {
			pageProps
		};
	}

	render() {
		const { Component, pageProps, reduxStore, router } = this.props;
		const isBMap = router.pathname === "/map";
		return (
			<Provider store={reduxStore}>
				<Head />
				{!isBMap && <Header />}
				<Component {...pageProps} />
				{!isBMap && <Footer />}
			</Provider>
		);
	}
}

export default withRedux(MyApp);
