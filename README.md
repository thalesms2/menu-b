# Menu Backend

> Teste técnico de desenvolvedor fullstack pleno

Menu é uma aplicação web para visualizar o cardápio do restaurante e realizar reservas, focando na usabilidade e design responsivo.

## Aplicação Hospedada

[Frontend](https://menu-f.vercel.app/) |
[Backend](https://menu-b.vercel.app/)

## Decisões Técnicas

* Frontend: React.js
  * Motivação: eficiência e pela possibilidade de criar componentes reutilizáveis.
* Backend: Nest.js
  * Motivação: Pela arquitetura de projeto que o framework trás consigo.
* Banco de dados: PostgreSQL
  * Motivação: Possuo maior expiência tanto criando projetos utilizando o PostgreSQL quanto dando manutenção.
* ORM: Prisma
  * Motivação: Aumento de legibilidade do código e fácil uso com TypeScript.

### Alternativas consideradas

* Frontend: Next.js e Vue.js foram considerados, porém, mesmo tendo mais experiência utilizando Next.js para projetos particulares e Vue.js profissionalmente, não possuo muita experiência em criação de projeto com Vue.js e Next.js seria desnecessário, pois suas funcionalidades de SSR não seriam bem aproveitas em uma aplicação simples como essa.

## Passos de instalação

### Pré-requisitos

* Node.js (versão 14 ou superior)
* PostgreSQL (local ou serviço em nuvem)

### Instruções

1. Clone os repositórios da aplicação frontend e backend:

```bash
git clone https://github.com/thalesms2/menu-f
git clone https://github.com/thalesms2/menu-b
```

2. Instale as depencias de ambos os projetos:

```bash
cd menu-f
npm install

cd ../menu-b
npm install
```

3. Configuração:

Crie um arquivo `.env` na pasta de ambos projetos e adicione as seguintes variáveis:
> Frontend (menu-f)

```bash
# Url onde está o backend
VITE_API_URL="http://localhost:5000"
# Chave de autorização para uso da API
VITE_API_KEY="a chave da api aqui"
```

> Backend (menu-b)

```bash
# Sua url de conexão ao banco de dados
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
# Chave de autorização utilizada para o frontend realizar requisições
API_KEY="a chave da api aqui"
NODE_ENV="development"
```

4. Execução:

* Para iniciar o backend:

```bash
npm run start
```

* Para iniciar o frontend:

```bash
cd ../menu-f
npm run dev
```

## Principais Componentes Implementados

### Arquitetura Geral

* Frontend (react):
  * Função: Visualizar o cardápio obtido da api e fazer reservas.
* Backend (Nest.js):
  * Função: Gerencia as requisições, manupula os dados e se comunica com o banco de dados
* Banco de dados (PostgreSQL):
  * Função: Armazena as informações do cardápio e reservas feitas.
  * Modelo de dados:
  
```prisma
model Reservation {
  id Int  @id @default(autoincrement())
  name String 
  persons Int
  date DateTime
}

model Menu {
  id Int @id @default(autoincrement())
  category Category
  name String @unique
  description String
  price Float
}

enum Category{
  ENTRY
  MAIN_DISH
  DESSERT
  DRINK
}
```

## Considerações Finais

### Desafios Enfrentados

Alguns dos principais desafios foram aprender e executar testes unitários no backend e a configuração do hosting do backend na Vercel, mas foram resolvidos com dedicação e pesquisa, resultando em um ambiente mais robusto e confiável para o desenvolvimento do projeto.

### Melhorias Futuras

- [ ] Melhorar usabilidade do seletor de data/hora para fazer uma reserva;
- [ ] Adicionar testes unitários para o frontend;
- [ ] Melhorar a documentação do swagger;
- [ ] Aumentar a quantidade de testes unitários para validar mais situações;

### Referências

* [Documentação do React.js](https://react.dev/reference/react)
* [Documentação do Nest.js](https://docs.nestjs.com/)
* [Documentação do Prisma](https://www.prisma.io/docs/orm)
* [Documentação do Zod](https://zod.dev/)
* [Documentação do class-validator](https://github.com/typestack/class-validator)
* [Documentação do tailwindcss](https://tailwindcss.com/docs/installation)
* [Documentação do react-use-form](https://www.react-hook-form.com/api/)
* [Documentação do Jest](https://jestjs.io/pt-BR/docs/)
* [Documentação do Redux](https://redux.js.org/api/api-reference)
* [Documentação do react-select](https://react-select.com/home)
