import { Router } from 'worktop';
import { listen } from 'worktop/cache';
import { Redis } from '@upstash/redis/cloudflare';

declare global {
	var UPSTASH_REDIS_REST_URL: string;
	var UPSTASH_REDIS_REST_TOKEN: string;
}

const routes = new Router();

// fazendo a conexão com o banco
const redis = new Redis({
	url: UPSTASH_REDIS_REST_URL,
	token: UPSTASH_REDIS_REST_TOKEN,
});

// criando rotas
// criando a rota para lêr a quantidade de acessos
routes.add('GET', '/get', async (req, res) => {
	const access_count = await redis.get('access_count');

	// no res.send no pimeiro parâmetro é o código HTTP e no segundo é o body
	return res.send(200, { access_count });
});

// rota para escrita de dados
// essa rota vai adicionar no contador toda vez que tiver um acesso
// essa rota não utiliza os recursos de Edge-Computing pois para escrever dados
// só é posível em um lugar do mundo mas para leitura é em todos os lugares
routes.add('POST', '/incr', async (req, res) => {
	const access_count = await redis.incr('access_count');

	return res.send(201, { access_count });
});

// o listen vai executar o método e na próxima que ele for executar a rota de novo,
// ele vai ver se a rota já não foi salva em cache e vai devolver os dados em cache
listen(routes.run);