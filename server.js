const Koa = require("koa");
const next = require("next");
const Router = require("koa-router");
const session = require("koa-session");
const debug = require("debug")("server:main");

const port = parseInt(process.env.PORT, 10) || 3000;
const host = "dev.wenzhou.sof.cn";
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = new Koa();
	const router = new Router();

	const SESSION_CONFIG = {
		key: "jid",
		rolling: true
		// 需要开启数据库就解除这个注释
		// store: new RedisSessionStore(redis),
	};

	server.use(async (ctx, next) => {
		const path = ctx.path;
		debug(`request come: ${path}`);
		if (path.startsWith("/_next")) {
			await handle(ctx.req, ctx.res);
			ctx.respond = false;
		} else {
			await next();
		}
	});

	// use koa-session
	server.use(session(SESSION_CONFIG, server));

	server.use(async (ctx, next) => {
		try {
			await next();
		} catch (error) {
			debug(error);
			ctx.res.statusCode = 500;
			ctx.body = `Error: ${error.stack}`;
		}
	});

	router.get("*", async ctx => {
		const { path } = ctx;

		// if (/.html$/.test(path)) {
		// 	const id = path.substring(
		// 		path.lastIndexOf("/") + 1,
		// 		path.length - 5
		// 	);
		// 	ctx.query = { id };
		// }

		await handle(ctx.req, ctx.res);
		ctx.respond = false;
	});

	server.use(async (ctx, next) => {
		ctx.res.statusCode = 200;
		await next();
	});

	server.use(router.routes());

	server.listen(port, host, () => {
		console.log(`> Ready on http://${host}:${port}`);
	});
});
