export const SUCCESS = "0";

export const getBMap = async () => {
	if (window.BMap) {
		return new window.BMap.Map("allmap");
	}

	return new Promise(resolve => {
		const init = () => {
			const map = new window.BMap.Map("allmap");
			resolve(map);
		};
		window.init = init;

		const script = document.createElement("script");
		script.type = "text/javascript";
		script.src =
			"//api.map.baidu.com/api?v=2.0&ak=slyff5csC40to4EzUM8vFCfusM3idHoh&callback=init";
		document.body.appendChild(script);
	});
};
