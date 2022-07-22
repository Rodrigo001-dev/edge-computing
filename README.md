## :page_with_curl: Projeto

<LINKEDIN>
Entendendo e estudando sobre edge-computing!
</LINKEDIN>

Por volta de 2011 as aplicações que eram hospedadas no modelo tradicional de VM(Máquina Virtual).
Quando a AWS lançou o EC2 fez uma diferença gigante do mundo de infraestrutura da maneira que era hospedado as aplicações. Antes tinha muito costume de hospedar aplicações em locais fisicos, em máquinas, as empresas tinham data-centers próprios e hospedavam suas aplicações web nesses data-centers, com isso ficava muito mais complexo de dar manutenção, de manter segurança e de não simplesmente cair tudo e ficar fora do ar.

Com isso as empresas começaram a mudar as suas hospedagens para a nuvem(cloud) que são as VMs que temos dentro da Amazon por exemplo, ou qualquer outro cloud-provider, essas VMs tem características específicas que básicamente é criado uma máquina virtual com recursos compartilhados que são recursos virtualizados, ou seja, é uma máquina muito mais potente que é utilizado pequena parte dos recursos dessas máquinas de forma virtualizada(não é física) e essa nossa máquina virtual está junto de várias máquinas(só que nós não conseguimos enchergar isso). Umas das coisas mais específicas das VMs tradicionais é que quando a aplicação é hospedada em uma VM, nós estamos hospedando a aplicação em uma única região do mundo, geralmente para pagar mais barato as aplicações são hospedadas nos Estados Unidos, ou é possível hospedar na América do Sul em São Paulo, só que vamos pagar um pouco mais porque a hospedagem aqui é mais cara pela quantidade de demanda de recursos que as empresas tem aqui em questão de cloud mas sempre vamos hospedar a aplicação em uma única região do mundo!

<LINKEDIN>
Mas qual o problema em hospedar a aplicação em uma única região do mundo?
</LINKEDIN>

Se pessoas do mundo inteiro acessam a aplicação(aplicação internacional), geralmente uma boa parte dos acessos vai ter uma alta latência.

<LINKEDIN>
Ex: Imagine que a aplicação é hospedada em São Paulo porque a maioria dos nossos usuários são do Brasil, e a nossa aplicação começa a crescer muito e começamos a ter acesso de outros lugares do mundo, começa ter acessos da Ásia, da América do Norte e essas pessoas quando vão fazer uma requisição para uma aplicação aqui do Brasil, a latência vai ser muito alta.
ex: Estados Unidos vai ser uma média de 200ms só de latência, ou seja, sem carregar nada do nosso site, fora o temo que demora para o site carregar.
  Se a Europa tentar acessar 300ms.
  Se a Oceania for tentar acessar 600 a 700ms de latência para chegar requisição aqui no servidor de São Paulo.
<LINKEDIN>

<LINKEDIN>
Mas então qual seria a solução?
</LINKEDIN>

Uma solução que as empresas começaram a recorrer é sobre o Multi-Region Deploy,que é ter a nossa aplicação com deploy em várias regiões do mundo, e temos uma estratégia antes do acesso chegar no nosso código que faz a rota do usuário para qual é a região mais próxima dele.
Porém hoje temos 33 localizações onde os clouds acabam tendo data-centers!

<LINKEDIN>
Será que eu crio 33 deploys em regiões diferentes no mundo todo?
Como eu atinjo a menor latência possível para que o usuário que esteja acessando a aplicação sempre esteja com a menor latência?
</LINKEDIN>

E é aí que entra o conceito de Edge-Computing(Computação na ponta) diferente de computação na nuvem.
Edge-Computing nada mais é do que ser fornecido uma forma com que os usuários que estão acessando a nossa aplicação, acessem a nossa aplicação através do data-center mais próximo deles.

<LINKEDIN>
OK, então isso vai ser muito caro!?
Pois precisamos da nossa aplicação rodando nessas 33 localizações!

A resposta é sim, e não!
Calma, você já vai entender!
</LINKEDIN>

A forma de trabalho com Edge-Computing na grande maioria das vezes vão fornecer isso através de um modelo que já é bem conhecido, que é serverless!
Serverless nada mais é do que a nossa aplicação só executa quando ouver acessos, ou seja, a nossa aplicação usando Serverless e usando Edge-Computing pode estar hospedada em todas as localizações do mundo sem precisar ter custos adicionais para isso, sem precisar ficar executando 24 horas por dia, e executando apenas quando o usuário fizer a requisição.

<LINKEDIN>
Mas por que Edge-Computing vem sendo utilizado?
</LINKEDIN>

As primeiras empresas que começaram a utilizar Edge-Computing é a Vercel e a Netlify.
A Vercel por exemplo é uma das empresas que mais utiliza desse conceito de Edge-Computing. Quando você começou a utilizar o Next.js e hospedar as suas aplicações na Vercel, e começou a utilizar dos conceitos Server-Side-Rendering(SSR), Static-Side-Generation(SSG), você já estava utilizando Edge-Computing, porque essas funções que processam pelo lado Server-Side executam na Edge, e elas executam em um serviço da AWS chamado AWS Lambda@Edge, esse serviço roda junto com o CDN da AWS que básicamente faz com que quando o usuário quer acessar uma página da aplicação, esse serviço consegue interceptar essa chamada para uma página HTML estática, vê se lá dentro está faltando algum dado como por exemplo é o que nós precisamos quando fazemos Server-Side-Rendering ou Static-Side-Generation e ele executa uma função na Edge, ou seja, mais próximo da localização do usuário, uma função backend, processa os dados e devolve esse HTML reescrito com aquelas novas informações.
Umas das coias que mais está sendo utilizado Edge-Computing é para esse processo de reescrita de HTML.

Mas o Edge-Computing ainda vai crecer muito mais do que isso!
Os casos de uso vão muito além de simplesmente reescrever HTML!

Já temos vários serviços migrando a maneira de funcionar para o conceito  de Edge-Computing, alguns desses serviços são:

PlanetScale: o PlanetScale para quem não sabe é um banco de dados MySQL que tem a grande vantagem de ser um banco de dados sob demanda, um banco de dados no estilo de precificação serverless, ou seja, nesse banco de dados não é preciso se preocupar com memória, com processamento, com CPU, com nada disso, nós só temos um limite de leituras e escritas que se pode fazer por mês. O PlanetScale anunciou recentemente as réplicas Read-Only em todo o mundo, ou seja, agora quando for hospedado o banco de dados no PlanetScale vai ser possível criar réplicas de leitura, que são cópias do banco de dados de leitura apenas em todas as regiões do mundo, para escrita temos apenas um único banco de dados(que provavelmente vai ser o master).

Fastly: a Fastly é uma das empresas junto com a Cloudflareque mais estão investindo no mundo de Edge-Computing, e eles anunciaram recentemente o Fastly Edge Object Storage que é um serviço estilo Amazon S3 onde conseguimos armazenar arquivos fisicos da Edge, ou seja, vamos conseguir ter um sistema de arquivos distribuidos em várias regiões do mundo, funcionando mais ou menos como o PlanetScale. Nós vamos ter uma única região onde é escrito os arquivos e a partir dessa região o Fastly vai distribuir por várias outras localidades réplicas de leitura.

Upstash: Upstash também é um banco de dados porém ele é focado em Redix e ele também é um sistema de mensageria utilizando o Kafka. O Upstash nada mais é do que um serviço que permite ser criado banco de dados Redix ou filas utilizando Kafka, e conseguimos ter a leitura tanto para o Redix quanto para o Kafka também na Edge, ou seja, conseguimos ler do nosso banco de dados Redix em qualquer região do mundo com uma latência muito pequena, mas para escrever os dados sempre vamos escrever em uma única região.

## 🚀 Tecnologias/Bibliotecas utilizadas

<a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white" alt="TypeScript"> </a>
<a href="https://nodejs.org/en/" target="_blank"> <img src="https://img.shields.io/badge/-Node.js-32CD32?style=flat-square&logo=Node.js&logoColor=white" alt="Node.js"> </a>
<a href="https://www.cloudflare.com/pt-br/" target="_blank"> <img src="https://img.shields.io/badge/-Cloudflare-CE3f00?style=flat-square&logo=cloudflare&logoColor=white" alt="Cloudflare"> </a>

## 💻 Autor

Feito com 💜 by Rodrigo Rael

<a href="https://www.linkedin.com/in/rodrigo-rael-a7a4b51a9/" target="_blank"> <img src="https://img.shields.io/badge/-RodrigoRael-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https" alt="Linkedin Rodrigo"> </a>
<a href="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" target="_blank"> <img src="https://img.shields.io/badge/-rodrigorael53@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rodrigorael53@gmail.com" alt="Gmail Rodrigo"> </a>