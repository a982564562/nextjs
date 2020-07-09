import { connect } from "react-redux";
import Link from "next/link";
import { changeHeadInfo } from "../../store/reducer/headReducer";
import { queryNewHouseData } from "../../store/reducer/newHouseReducer";

const NewHouseList = () => {
	return (
		<div className="house-new">
			新房
			<Link href="/">
				<button className="btn btn-primary">回到首页</button>
			</Link>
			<Link href="/new/[id]" as="/new/1.html">
				<button className="btn btn-primary">去详情</button>
			</Link>
		</div>
	);
};

NewHouseList.getInitialProps = async ({ reduxStore }) => {
	const {
		init: { cityName },
		newHouse: { req, total, items }
	} = reduxStore.getState();

	const keywords = `${cityName}楼盘, ${cityName}一手房, ${cityName}新房`,
		description = `${cityName}房产网，查找真实优质的${cityName}新开盘楼盘，${cityName}新房房源，就来房娃找房大平台，房娃给您一个舒适的家。`,
		title = `${cityName}楼盘网, ${cityName}新房一手房, ${cityName}房产信息网 - 房娃找房`;

	reduxStore.dispatch(
		changeHeadInfo({
			keywords,
			description,
			title
		})
	);

	if (total > 0) {
		return { total, items };
	}

	const data = await reduxStore.dispatch(queryNewHouseData(req));

	return data;
};

const mapStateToProps = state => ({
	req: state.newHouse.req,
	total: state.newHouse.total,
	items: state.newHouse.items
});

export default connect(mapStateToProps)(NewHouseList);
