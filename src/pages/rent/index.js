import { connect } from "react-redux";
import Link from "next/link";
import { changeHeadInfo } from "../../store/reducer/headReducer";

const RentHouseList = () => {
	return (
		<>
			租房
			<Link href="/">
				<button>回到首页</button>
			</Link>
		</>
	);
};

RentHouseList.getInitialProps = async ({ reduxStore }) => {
	const { cityName } = reduxStore.getState().init;
	const keywords = `${cityName}租房网,${cityName}房屋出租,${cityName}租房子,${cityName}出租房`,
		description = `房娃找房${cityName}租房网为您提供${cityName}房屋出租信息和${cityName}租房价格,包括${cityName}二手房出租、新房出租，租房子,找${cityName}出租房,就上房娃找房${cityName}租房网。`,
		title = `${cityName}租房网,${cityName}租房信息,${cityName}房屋出租价格 - 房娃找房`;

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
})(RentHouseList);
