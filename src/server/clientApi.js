import axios from "axios";
import { BASE_API } from "./config";

const instance = axios.create({
	baseURL: BASE_API,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
		"X-App-Platform": "pc"
	}
});

//添加请求拦截器
instance.interceptors.request.use(
	config => {
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

//添加响应拦截器
instance.interceptors.response.use(
	res => {
		return res.data;
	},
	error => {
		return { code: "1", data: null, message: error.message };
	}
);

export default instance;
