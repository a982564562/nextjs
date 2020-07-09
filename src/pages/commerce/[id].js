import { connect } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { changeHeadInfo } from "../../store/reducer/headReducer";

const CommerceHouseDetail = () => {
	const router = useRouter();
	console.log("router: ", router);
	return (
		<>
			商业地产详情页面
			<Link href="/commerce/">
				<button>回到商业地产列表</button>
			</Link>
		</>
	);
};

CommerceHouseDetail.getInitialProps = async ({ reduxStore }) => {
	const data = {}; //先调用查看接口,返回数据后再更新标题
	const { cityName } = reduxStore.getState().init;
	const keywords = `${cityName}商铺出租,${cityName}写字楼出租,${cityName}办公楼出租`,
		description = `${data.title}, 地址:${data.address}, 若您想快速找到理想的商铺、写字楼,上房娃找房${cityName}商业地产网!`,
		title = `${data.title}-${data.district}${data.street}${data.property}租售 - 房娃找房`;

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
})(CommerceHouseDetail);
