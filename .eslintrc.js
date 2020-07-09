// module.exports = {
// 	env: {
// 		browser: true, //浏览器全局变量
// 		node: true, //Node.js全局变量和Node.js作用域
// 		es6: true, //启用除模块以外的所有ECMAScript 6功能
// 		commonjs: true,
// 	},
// 	globals: {
// 		Atomics: "readonly",
// 		SharedArrayBuffer: "readonly",
// 		_: true,
// 		$: true,
// 	},
// 	parser: "babel-eslint",
// 	parserOptions: {
// 		ecmaVersion: 6,
// 		sourceType: "module",
// 		ecmaFeatures: {
// 			jsx: true,
// 		},
// 	},
// 	extends: ["airbnb", "prettier", "prettier/react"],
// 	plugins: ["prettier"],
// 	rules: {
// 		"no-debugger": 0,
// 		"no-unused-vars": [
// 			1,
// 			{
// 				argsIgnorePattern: "res|next|^err",
// 			},
// 		],
// 		"no-param-reassign": [
// 			2,
// 			{
// 				props: false,
// 			},
// 		],
// 		"no-console": 0,
// 		"import/prefer-default-export": 0,
// 		import: 0,
// 		"func-names": 0,
// 		"space-before-function-paren": 0,
// 		"comma-dangle": 0,
// 		"max-len": 0,
// 		"import/extensions": 0,
// 		"no-underscore-dangle": 0,
// 		"consistent-return": 0,
// 		"react/display-name": 0,
// 		"react/react-in-jsx-scope": 0,
// 		"react/prefer-stateless-function": 0,
// 		"react/forbid-prop-types": 0,
// 		"react/no-unescaped-entities": 0,
// 		"jsx-a11y/accessible-emoji": 0,
// 		"jsx-a11y/label-has-for": 0,
// 		"react/jsx-filename-extension": [
// 			1,
// 			{
// 				extensions: [".js", ".jsx"],
// 			},
// 		],
// 		radix: 0,
// 		semi: 0,
// 		"no-shadow": [
// 			2,
// 			{
// 				hoist: "all",
// 				allow: ["resolve", "reject", "done", "next", "err", "error"],
// 			},
// 		],
// 		"prettier/prettier": 2,
// 		"jsx-a11y/href-no-hash": "off",
// 		"jsx-a11y/alt-text": "off",
// 		"jsx-a11y/anchor-is-valid": [
// 			"warn",
// 			{
// 				aspects: ["invalidHref"],
// 			},
// 		],
// 		"react/jsx-props-no-spreading": [0],
// 		"react/prop-types": [0],
// 		quotes: 0, //引号风格
// 		"spaced-comment": 0,
// 		"no-empty-pattern": 0,
// 		"no-unused-expressions": [
// 			1,
// 			{
// 				allowShortCircuit: true,
// 				allowTernary: true,
// 				allowTaggedTemplates: true,
// 			},
// 		],
// 		"one-var": 0, //强制变量声明放在一起
// 		"import/no-extraneous-dependencies": [
// 			"error",
// 			{ peerDependencies: true },
// 		],
// 		"global-require": 0,
// 	},
// };

/*
	0: off,
	1: warn,
	2: error
*/
module.exports = {
	env: {
		browser: true,
		es6: true,
		commonjs: true,
		node: true
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly"
	},
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	plugins: ["react"],
	settings: {
		react: {
			pragma: "React", // Pragma to use, default to "React"
			version: "16.13.0"
		}
	},
	rules: {
		"no-debugger": 0, //禁用 debugger
		"no-unused-vars": 1, //禁止出现未使用过的变量
		"no-param-reassign": 0, //禁止对 function 的参数进行重新赋值
		"no-console": 0, //禁用 console
		"func-names": 0, //要求或禁止使用命名的 function 表达式
		"space-before-function-paren": 0, //强制在 function的左括号之前使用一致的空格
		"no-underscore-dangle": 0, //禁止标识符中有悬空下划线
		"consistent-return": 0, //要求 return 语句要么总是指定返回的值，要么不指定
		radix: 0, //强制在 parseInt() 使用基数参数
		semi: 0, //要求或禁止使用分号代替 ASI
		"no-shadow": 0, //禁止变量声明与外层作用域的变量同名
		quotes: 0, //引号风格
		"spaced-comment": 0, //强制在注释中 // 或 /* 使用一致的空格
		"no-empty-pattern": 0, //禁止使用空解构模式
		"no-unused-expressions": [
			1,
			{
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true
			}
		], //禁止出现未使用过的表达式
		"one-var": 0, //强制变量声明放在一起
		"global-require": 0, //要求 require() 出现在顶层模块作用域中
		indent: 0, //强制使用一致的缩进
		"no-tabs": 0, //禁用 tab
		"prefer-const": 0, //要求使用 const 声明那些声明后不再被修改的变量
		"comma-dangle": [2, "never"], //要求或禁止末尾逗号
		"no-sequences": 0, //禁用逗号操作符
		"no-case-declarations": 0, //不允许在 case 子句中使用词法声明
		"no-prototype-builtins": 0, //禁止直接调用 Object.prototypes 的内置属性
		"no-extra-boolean-cast": 0, //禁止不必要的布尔转换
		"import/prefer-default-export": 0,
		"jsx-a11y/accessible-emoji": 0,
		"jsx-a11y/label-has-for": 0,
		"jsx-a11y/href-no-hash": 0,
		"jsx-a11y/alt-text": 0,
		"react/display-name": 0,
		"react/react-in-jsx-scope": 0,
		"react/prefer-stateless-function": 0,
		"react/forbid-prop-types": 0,
		"react/no-unescaped-entities": 0,
		"react/jsx-filename-extension": [
			1,
			{
				extensions: [".js", ".jsx"]
			}
		],
		"react/jsx-props-no-spreading": 0,
		"react/prop-types": 0
	}
};
