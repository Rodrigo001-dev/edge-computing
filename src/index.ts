import { Redis } from '@upstash/redis/cloudflare';

export interface Env {
	UPSTASH_REDIS_REST_URL: string;
	UPSTASH_REDIS_REST_TOKEN: string;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		// fazendo a conexão com o banco
		const redis = new Redis({
			url: env.UPSTASH_REDIS_REST_URL,
			token: env.UPSTASH_REDIS_REST_TOKEN
		});

		const access_count = await redis.incr('access_count');

		return new Response(JSON.stringify({
			access_count
		}));
	},
};
