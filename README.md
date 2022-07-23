## :page_with_curl: Projeto

Por volta de 2011 as aplicações que eram hospedadas no modelo tradicional de VM(Máquina Virtual).
Quando a AWS lançou o EC2 fez uma diferença gigante do mundo de infraestrutura da maneira que era hospedado as aplicações. Antes tinha muito costume de hospedar aplicações em locais fisicos, em máquinas, as empresas tinham data-centers próprios e hospedavam suas aplicações web nesses data-centers, com isso ficava muito mais complexo de dar manutenção, de manter segurança e de não simplesmente cair tudo e ficar fora do ar.

Com isso as empresas começaram a mudar as suas hospedagens para a nuvem(cloud) que são as VMs que temos dentro da Amazon por exemplo, ou qualquer outro cloud-provider, essas VMs tem características específicas que básicamente é criado uma máquina virtual com recursos compartilhados que são recursos virtualizados, ou seja, é uma máquina muito mais potente que é utilizado pequena parte dos recursos dessas máquinas de forma virtualizada(não é física) e essa nossa máquina virtual está junto de várias máquinas(só que nós não conseguimos enchergar isso). Umas das coisas mais específicas das VMs tradicionais é que quando a aplicação é hospedada em uma VM, nós estamos hospedando a aplicação em uma única região do mundo, geralmente para pagar mais barato as aplicações são hospedadas nos Estados Unidos, ou é possível hospedar na América do Sul em São Paulo, só que vamos pagar um pouco mais porque a hospedagem aqui é mais cara pela quantidade de demanda de recursos que as empresas tem aqui em questão de cloud mas sempre vamos hospedar a aplicação em uma única região do mundo!

Se pessoas do mundo inteiro acessam a aplicação(aplicação internacional), geralmente uma boa parte dos acessos vai ter uma alta latência.

Uma solução que as empresas começaram a recorrer é sobre o Multi-Region Deploy,que é ter a nossa aplicação com deploy em várias regiões do mundo, e temos uma estratégia antes do acesso chegar no nosso código que faz a rota do usuário para qual é a região mais próxima dele.
Porém hoje temos 33 localizações onde os clouds acabam tendo data-centers!

E é aí que entra o conceito de Edge-Computing(Computação na ponta) diferente de computação na nuvem.
Edge-Computing nada mais é do que ser fornecido uma forma com que os usuários que estão acessando a nossa aplicação, acessem a nossa aplicação através do data-center mais próximo deles.

A forma de trabalho com Edge-Computing na grande maioria das vezes vão fornecer isso através de um modelo que já é bem conhecido, que é serverless!
Serverless nada mais é do que a nossa aplicação só executa quando ouver acessos, ou seja, a nossa aplicação usando Serverless e usando Edge-Computing pode estar hospedada em todas as localizações do mundo sem precisar ter custos adicionais para isso, sem precisar ficar executando 24 horas por dia, e executando apenas quando o usuário fizer a requisição.

Os casos de uso vão muito além de simplesmente reescrever HTML!

## 🚀 Tecnologias/Bibliotecas utilizadas

<a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript"> </a>
<a href="https://www.cloudflare.com/pt-br/" target="_blank"> <img src="https://img.shields.io/badge/-Cloudflare-CE3f00?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare"> </a>
<a href="https://upstash.com/" target="_blank"> <img src="https://img.shields.io/badge/-Upstash-00E9A3?style=flat-square&logo=upstash&logoColor=white" alt="Upstash"> </a>

## 💻 Autor

Feito com 💜 by Rodrigo Rael

<a href="https://www.linkedin.com/in/rodrigo-rael-a7a4b51a9/" target="_blank"> <img src="https://img.shields.io/badge/-RodrigoRael-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https" alt="Linkedin Rodrigo"> </a>
<a href="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" target="_blank"> <img src="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" alt="Gmail Rodrigo"> </a>
