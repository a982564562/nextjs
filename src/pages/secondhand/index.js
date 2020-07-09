import { connect } from "react-redux";
import Link from "next/link";
import { changeHeadInfo } from "../../store/reducer/headReducer";

const SecondhandHouseList = () => {
	const id = 1;
	return (
		<>
			二手房
			<Link href="/">
				<button>回到首页</button>
			</Link>
			<Link href="/secondhand/[id]" as={`/secondhand/${id}.html`}>
				<button className="btn btn-primary">去详情</button>
			</Link>
		</>
	);
};

SecondhandHouseList.getInitialProps = async ({ reduxStore }) => {
	const { cityName } = reduxStore.getState().init;
	const keywords = `${cityName}二手房，${cityName}二手房买卖，${cityName}二手房房源 - 房娃找房房产`,
		description = `房娃找房${cityName}二手房网，为您提供${cityName}二手房出售，二手房房屋买卖交易信息，二手房房源信息，请访问房娃找房${cityName}房产网。`,
		title = `${cityName}二手房房产网，${cityName}二手房交易信息，${cityName}二手房出售 - 房娃找房`;

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
})(SecondhandHouseList);
