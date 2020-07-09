async function test() {
	const Redis = require("ioredis");

	const redis = new Redis({
		port: 6379,
	});

	await redis.setex("c", 5, 123);
	const keys = await redis.keys("*");
	console.log(await redis.get("c"));
}
test();
