# Desafio técnico para trilha Node.js do Compasso  UOL
## Objetivo
Criar uma API que REST que realize operações de CRUD em duas tabelas: cidades e clientes.
Tais operações são:
- Cadastrar cidade
- Cadastrar cliente
- Consultar cidade pelo nome
- Consultar cidade pelo estado
- Consultar cliente pelo nome
- Consultar cliente pelo Id
- Remover cliente
- Alterar o nome do cliente

## Tecnologias utilizadas
- Node.js 14.15.4
- Express ^4.17.1
- Sqlite3 ^5.0.2
- Sequelize ^6.6.2

## Execução da API
Para executar a API, primeiramente, instale as dependências com o comando "npm i" e, posteriomente, execute "npm start".

## Endpoints
Para realização de cadastro de cidades e clientes:

- POST https://localhost/3000/cidades
- POST https://localhost/3000/clientes

Para consulta de clientes e cidades por nome:

- GET https://localhost/3000/cidades/nome/{nome}
- GET https://localhost/3000/clientes/nome/{nome}

Para consulta de clientes por Id:

- GET https://localhost/3000/clientes/id/{id}

Para consulta de cidades por estado:

- GET https://localhost/3000/cidades/estado/{estado}

Para remover algum cliente:

- DELETE https://localhost/3000/clientes/{id}

Para alterar o nome de algum cliente

- PUT https://localhost/3000/clientes/
