import { connect } from "react-redux";
import Link from "next/link";
import { changeHeadInfo } from "../../store/reducer/headReducer";

const NewHouseDetail = () => {
	return (
		<>
			新房详情页面
			<Link href="/new/">
				<button>回到新房列表</button>
			</Link>
		</>
	);
};

NewHouseDetail.getInitialProps = async ({ reduxStore }) => {
	const data = {};
	const { cityName } = reduxStore.getState().init;
	const keywords = `${data.name}, ${cityName}${data.name}`,
		description = `房娃找房为您提供${cityName}${data.name}楼盘详情,楼盘地址位于${data.address},占地面积${data.covered}平方米,拥有${data.propertyYears}年产权,由${data.company}开发,了解更多该楼盘信息,就上房娃找房`,
		title = `${data.name},${cityName}${data.name}楼盘详情,楼盘户型,周边配套,交通地图,${data.saleAddress} - 房娃找房`;

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
})(NewHouseDetail);
