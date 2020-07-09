import { connect } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { changeHeadInfo } from "../../store/reducer/headReducer";

const RentHouseDetail = () => {
	const router = useRouter();
	console.log("router: ", router);
	return (
		<>
			租房详情页面
			<Link href="/rent/">
				<button>回到租房列表</button>
			</Link>
		</>
	);
};

RentHouseDetail.getInitialProps = async ({ reduxStore }) => {
	const data = {};
	const { cityName } = reduxStore.getState().init;
	const keywords = `${data.city}${data.district}${data.street}${data.name},${data.rental}${data.rentalStr},${data.payment},${data.room}室${data.hall}厅${data.toilet}卫,${data.area}平方米,朝${data.direction},${data.property}租房信息`,
		description = `房娃找房${cityName}租房网,提供${data.city}${data.district}${data.street}${data.name}${data.rental}${data.rentalStr}${data.payment}${data.room}室${data.hall}厅${data.toilet}卫${data.area}平方米${data.direction}${data.ecoraction}${data.property}租房信息,${data.title}房屋出租, 房娃找房让你找到满意的家`,
		title = `${data.name},${data.street ? `${data.street}租房` : ""},${
			data.title
		},${data.district}租房 - ${cityName}房娃找房`;

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
})(RentHouseDetail);
