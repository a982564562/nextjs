import Head from "next/head";
import { connect } from "react-redux";

const HeadWrapper = ({ keywords, description, title }) => (
	<Head>
		<meta name="keywords" content={keywords} />
		<meta name="description" content={description} />
		<title>{title}</title>
	</Head>
);

const mapStateToProps = state => {
	const { keywords, description, title } = state.head;

	return {
		keywords,
		description,
		title
	};
};

export default connect(mapStateToProps)(HeadWrapper);
