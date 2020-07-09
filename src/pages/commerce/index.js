import { connect } from "react-redux";
import Link from "next/link";
import { changeHeadInfo } from "../../store/reducer/headReducer";

const CommerceHouseList = () => {
	return (
		<>
			商业地产
			<Link href="/">
				<button>回到首页</button>
			</Link>
		</>
	);
};

CommerceHouseList.getInitialProps = async ({ reduxStore }) => {
	const { cityName } = reduxStore.getState().init;
	const keywords = `${cityName}商业地产出售,${cityName}商铺租售,${cityName}写字楼租售`,
		description = `房娃找房${cityName}商业地产信息网,为您提供${cityName}优质的商铺房源、写字楼,找${cityName}商铺,就上房娃找房${cityName}商业地产信息网。`,
		title = `${cityName}商业地产网,${cityName}商铺租售,写字楼租售 - 房娃找房`;

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
})(CommerceHouseList);
