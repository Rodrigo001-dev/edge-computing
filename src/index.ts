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

		if (request.url.endsWith('/get')) {
			// buscando(fazendo uma leitura) o número de acessos
			const access_count = await redis.get('access_count');

			return new Response (JSON.stringify({
				access_count
			}));
		} else {
			// o contador está fazendo uma operação par alterar os dados no banco
			// e como eu estou fazendo uma operação de escrita(mudando uma informação)
			// eu não estou utilizando o conceito de Edge no banco de dados porque sempre
			// que é feito operações de escrita, os dados sempre vão ser alterados(escritos)
			// em uma única região do mundo
			// utilizando o conceito de edge-computing no upstash com redis é somente
			// para leitura de dados que a latência é muito pequena pois eu vou lêr os
			// dados da região mais próxima de mim.
			const access_count = await redis.incr('access_count');

			return new Response(JSON.stringify({
				access_count
			}));
		}
	},
};
