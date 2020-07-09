import { connect } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { changeHeadInfo } from "../../store/reducer/headReducer";

const SecondhandHouseDetail = () => {
	const router = useRouter();
	console.log("router: ", router);
	return (
		<>
			二手房详情页面
			<Link href="/secondhand/">
				<button>回到二手房列表</button>
			</Link>
		</>
	);
};

SecondhandHouseDetail.getInitialProps = async ({ reduxStore }) => {
	const data = {};
	const { cityName } = reduxStore.getState().init;
	const keywords = `${data.name},${data.room}室${data.hall}厅${data.toilet}卫,${data.year}${data.ecoration}${data.property},${data.street},${data.area}平方米,${data.direction},${data.floor}(共${data.total})`,
		description = `房娃找房${cityName}二手房网,为您提供${data.name}二手房出售信息,${data.unit}元/㎡,${data.room}室${data.hall}厅${data.toilet}卫,${data.area}平方米,朝${data.direction},${data.year}${data.ecoraction}${data.property}地址位于${data.district}${data.street},${data.name}二手房出售信息就上房娃找房`,
		title = `${data.title},${data.name}二手房,${data.room}室${data.hall}厅${data.toilet}卫,${data.area}平方米,${data.price}万元 - ${cityName}房娃找房`;

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
})(SecondhandHouseDetail);
