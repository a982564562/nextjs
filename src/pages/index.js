import { connect } from "react-redux";
import { changeHeadInfo } from "../store/reducer/headReducer";
import Home from "../components/Home";

const Index = () => {
	return <Home />;
};

Index.getInitialProps = async ({ reduxStore }) => {
	const { cityName } = reduxStore.getState().init;
	const keywords = `${cityName}房娃找房, ${cityName}房产网, ${cityName}二手房, ${cityName}租房`,
		description = `${cityName}房娃找房房产网为用户提供找房信息。包括${cityName}二手房、新房、租房、商铺、写字楼等，挑好房就上${cityName}房娃找房房地产信息网。`,
		title = `${cityName}房产网, ${cityName}二手房, 租房, 新房, 房产信息网 - ${cityName}房娃找房`;

	reduxStore.dispatch(
		changeHeadInfo({
			keywords,
			description,
			title
		})
	);

	return {};
};

export default connect(function mapStateToProps() {
	return {};
})(Index);
