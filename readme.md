# Souv-Backend

Tecnologias: NodeJS - Fastify - PrismaORM

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org) (recomendo a versão LTS)
- [npm](https://www.npmjs.com)
- [PostgreSQL](https://www.postgresql.org/)

### Opcional

- [DBeaver](https://dbeaver.io/download/)
- [Docker](https://www.docker.com) e [Docker Compose](https://docs.docker.com/compose/)

## Passo a Passo

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local.

### 1. Clonando o Repositório

Abra o terminal e execute o comando abaixo para clonar o repositório:

```bash
git clone https://github.com/thiagoleite92/souv-back
```

### 2. Navegando até o Diretório do Projeto

```bash
cd souv-back
```

### 3. Instalando as Dependências

```bash
npm install
```

### 4. Configurando Variáveis de Ambiente

```bash
cp .env.example .env
```

### 5.1 Rodando as Migrações - Sem utilizar o Docker

```bash
npx prisma migrate dev
```

### 5.1 Rodando as Migrações - Utilizando o Docker

```bash
docker-compose up -d
```

#### OBS: Talvez seja necessário configurar o banco de dados para aceitar conexões fora de sua máquina [tutorial com DBeaver](https://medium.com/@edu18ds/running-mysql-in-container-docker-and-setting-dbeaver-5f9e5781649d)

```bash
npx prisma migrate dev
```

### 6. Rodando o Projeto

```bash
npm run dev
```

Por padrão aplicação estará rodando em http://localhost:5555.

# Funcionalidades

## Listagem de items

- [x] Listagem de items HTTP.get /items

## Inserção de item

- [x] Inserção de item HTTP.post /items

## Fazer a checagem do item

- [x] Fazer a checagem do item HTTP.patch /items
