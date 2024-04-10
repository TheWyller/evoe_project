# EVOE-Project

O projeto fullstack consiste em um backend desenvolvido em Node.js com TypeScript, utilizando o framework Express. O banco de dados utilizado é o PostgreSQL. Já o frontend é construído com React e também utiliza TypeScript. O objetivo desse teste técnico é criar usuários autenticados que possam gerenciar diversos apoiadores vinculados a eles, funcionando como uma espécie de agenda eletrônica.

## Como Rodar a Aplicação

**Vale pontuar que o NODE deve estar instalado na máquina**

_O gerenciador de arquivos usado foi o yarn mais pode ser usado o npm_

### Início

Realizar o clone do repositório.

```shell
  git clone
```

Na pasta raiz executar os seguintes comandos:

Entrar na pasta do projeto backend:

```shell
  cd Backend
```

Instalar as dependências

```shell
  yarn
```

Crie um arquivo .env com os parâmetros de banco de dados e de usuário do PostgreSQL

```shell
  POSTGRES_USER=
  POSTGRES_PASSWORD=
  POSTGRES_DB=
  POSTGRES_PORT=
  JWT_SECRET=
  ADM_PASSWORD=
```

#### Com o docker

```shell
  docker-compose up
```

#### Sem o docker

Rodar as migrations do TypeORM

```shell
  yarn typeorm migration:run -d src/data-source.ts
```

Abrir o servidor

```shell
  yarn dev
```

Caso deseje testar apenas o backend com requisições diretas, o usuário ADM padrão é:

```shell
  email = root@root.com
  senha = ADM_PASSWORD ou 123456 quando não aplicado no arquivo .env
```

Após iniciar o servidor do backend, abra um novo terminal na raiz do projeto e execute os seguintes comandos para inicializar o frontend:

Entrar na pasta do projeto frontend:

```shell
  cd Frontend
```

Instalar as dependências:

```shell
  yarn
```

Para inicializar o Frontend:

```shell
  yarn start
```

## TESTES

### Testes Backend

Para executar os testes, certifique-se de estar na raiz do projeto e aplique os seguintes comandos:

```shell
  cd Backend
```

```shell
  yarn test
```

## Endpoints - API

## 1. **Users**

A entidade User é definido como:

| Campo      | Tipo    | Descrição                                     |
| ---------- | ------- | --------------------------------------------- |
| id         | string  | Identificador único do usuário                |
| firstName  | string  | O nome do usuário.                            |
| lastName   | string  | O sobrenome do usuário.                       |
| phone      | boolean | O telefone do usuário.                        |
| email      | objeto  | O e-mail do usuário.                          |
| password   | string  | A senha de acesso do usuário                  |
| createdAt  | Date    | Indica data de criação do usuário             |
| updatedAt  | Date    | Indica data de última atualização do usuário  |
| deletedAt  | Date    | Indica data da exclusão do usuário            |
| supporters | Array   | Todos os apoiadores vinculados a esse usuário |

### Endpoints

| Método | Rota       | Descrição                                 |
| ------ | ---------- | ----------------------------------------- |
| POST   | /users     | Criação de um usuário.                    |
| GET    | /users     | Lista todos os usuários - apenas o ADM    |
| GET    | /users/:id | Lista o próprio usuário                   |
| DELETE | /users/:id | Deleta o usuário                          |
| PATCH  | /users/:id | Atualiza campos do usuário passado por ID |

---

### 1.1. **Criação de Usuário**

### `/users`

### Exemplo de Request:

```
POST /users
Authorization: Token
```

### Corpo da Requisição:

```json
{
  "firstName": "Wyller",
  "lastName": "Fernandes",
  "phone": "41999999999",
  "email": "wyller@wyller.com",
  "password": "123456"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "47468317-f47e-40ed-b231-af6fe70339f8",
  "firstName": "Wyller",
  "lastName": "Fernandes",
  "email": "wyller@wyller.com",
  "phone": "41999999999",
  "created_at": "2022-11-29T11:39:42.518Z",
  "updated_at": "2022-11-29T11:39:42.518Z",
  "isAdm": false,
  "supporters": []
}
```

### Possíveis Erros:

| Código do Erro | Descrição                 |
| -------------- | ------------------------- |
| 400 Conflict   | Email already registered. |

---

### 1.2. **Listando Usuários**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users`

### Exemplo de Request:

```
GET /users
Authorization: Token e ser Administrador
```

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "d7b292cc-a4b2-4459-be2f-0e1a8c04ca5e",
    "firstName": "root",
    "lastName": "adm",
    "email": "root@root.com",
    "phone": "41999999999",
    "created_at": "2022-11-29T11:39:42.518Z",
    "updated_at": "2022-11-29T11:39:42.518Z",
    "isAdm": true,
    "supporters": []
  },
  {
    "id": "47468317-f47e-40ed-b231-af6fe70339f8",
    "firstName": "Wyller",
    "lastName": "Fernandes",
    "email": "wyller@wyller.com",
    "phone": "41999999999",
    "created_at": "2022-11-29T11:39:42.518Z",
    "updated_at": "2022-11-29T11:39:42.518Z",
    "isAdm": false,
    "supporters": []
  }
]
```

### Possíveis Erros:

```JSON
{
	"message": "Invalid token"
}
```

ou

```JSON
{
	"message": "You're not the ADM"
}
```

---

### 1.3. **Atualizar um Usuário por ID**

### `/users/:id`

### Exemplo de Request:

```
PATCH /users/9cda28c9-e540-4b2c-bf0c-c90006d37893
Authorization: Token e usuário dono
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| id        | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
{
  "firstName": "Wyller2",
  "lastName": "Fernandes2",
  "email": "wyller2@wyller.com",
  "phone": "419999999992"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "User updated",
  "userdata": {
    "id": "0721c526-34d3-41ff-82b0-0a19394a146a",
    "firstName": "Wyller",
    "lastName": "Fernandes",
    "email": "wyller2@wyller.com",
    "phone": "41955555555",
    "created_at": "2022-11-28T14:00:49.671Z",
    "updated_at": "2022-11-29T11:51:39.021Z",
    "isAdm": false,
    "supporters": []
  }
}
```

### Possíveis Erros:

| Código do Erro | Descrição       |
| -------------- | --------------- |
| 400 Not Found  | User not found. |

---

### 1.4. **Deletar um Usuário por ID**

[ Voltar aos Endpoints ](#5-endpoints)

### `/users/:id`

### Exemplo de Request:

```
DELETE /users/9cda28c9-e540-4b2c-bf0c-c90006d37893
Authorization: Token e ser o dono do usuário
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| id        | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```
vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "Usuário deletado com sucesso!"
}
```

### Possíveis Erros:

| Código do Erro  | Descrição           |
| --------------- | ------------------- |
| 409 Conflict    | User not found.     |
| 400 Bad Request | Usuário já deletado |

---

## 2. **Login**

### 2.1. **Login do Usuário**

### `/login`

### Exemplo de Request:

```
POST /login
Authorization: None
```

### Corpo da Requisição:

```json
{
  "email": "wyller@wyller.com",
  "password": "1234"
}
```

### Exemplo de Response:

```
200 Ok
```

```json
{
  "token": "ebJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc0FkbSI6MSwiaWQiOiJiOTU1MmUzYS0wMWUzLTQ0MTMtOGE3Ni1kOWNjZGI2NzczOTMiLCFpYXQiOjE2NjMwOTc4MzQsImV4cCI6MTY2MzE4NDIzNH0.gw9R_KST5TdN__DMx6Aj83KKbwmX-4UbNArYu0DGJo2"
}
```

### Possíveis Erros:

| Código do Erro | Descrição           |
| -------------- | ------------------- |
| 403 Forbidden  | Invalid Credentials |

---

## 3. **Supporters**

A entidade Supporters é definido como:

| Campo     | Tipo    | Descrição                                     |
| --------- | ------- | --------------------------------------------- |
| id        | string  | Identificador único do apoiador               |
| firstName | string  | O nome do apoiador.                           |
| lastName  | string  | O sobrenome do apoiador.                      |
| phone     | boolean | O telefone do apoiador.                       |
| email     | objeto  | O e-mail do apoiador.                         |
| createdAt | Date    | Indica data de criação do apoiador            |
| updatedAt | Date    | Indica data de última atualização do apoiador |
| deletedAt | Date    | Indica data da exclusão do apoiador           |

### Endpoints

| Método | Rota            | Descrição                   |
| ------ | --------------- | --------------------------- |
| POST   | /supporters     | Criação de um apoiador.     |
| GET    | /supporters     | Lista todos os apoiadores   |
| GET    | /supporters/:id | Lista o próprio apoiador    |
| DELETE | /supporters/:id | Deleta o apoiador           |
| PATCH  | /supporters/:id | Atualiza campos do apoiador |

### 3.1. **Criação de um Apoiador**

### `/supporters`

### Exemplo de Request:

```
POST /supporters
Authorization: Token
```

### Corpo da Requisição:

```json
{
  "firstName": "Wyller_apoiador",
  "lastName": "Fernandes",
  "phone": "41999999999",
  "email": "wyller@wyller.com"
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
  "id": "26ec4d63-b785-44de-bcf2-3ddbc567f95b",
  "firstName": "Wyller_Apoiador",
  "lastName": "Fernandes",
  "email": "wyller@wyller.com",
  "phone": "41999999999",
  "created_at": "2022-11-29T20:10:57.574Z",
  "updated_at": "2022-11-29T20:10:57.574Z",
  "user": "d7b292cc-a4b2-4459-be2f-0e1a8c04ca5e"
}
```

### 3.2. **Listando Apoiador do Usuário**

### `/supporters`

### Exemplo de Request:

```
GET /supporters
Authorization: Token
```

### Corpo da Requisição:

```
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "id": "41de310f-c408-44f5-b606-2c164db4f44d",
    "firstName": "Wyller2",
    "lastName": "Fernandes",
    "email": "wyller2@wyller.com",
    "phone": "419554763786",
    "created_at": "2022-11-28T19:42:38.390Z",
    "updated_at": "2022-11-29T11:30:30.338Z"
  },
  {
    "id": "a091b5cc-b2f2-4d6a-90bb-b0ba86b342dc",
    "firstName": "Wyller3",
    "lastName": "Fernandes",
    "email": "wyller3@wyller.com",
    "phone": "41999999999",
    "created_at": "2022-11-29T12:13:06.082Z",
    "updated_at": "2022-11-29T12:13:06.082Z"
  }
]
```

### Possíveis Erros:

```JSON
{
	"message": "Invalid token"
}
```

---

### 3.3. **Atualizar um Apoiador por ID**

### `/supporters/:id`

### Exemplo de Request:

```
PATCH /users/9cda28c9-e540-4b2c-bf0c-c90006d37893
Authorization: Token e usuário dono do apoiador
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                                    |
| --------- | ------ | -------------------------------------------- |
| id        | string | Identificador único do apoiador (Supporters) |

### Corpo da Requisição:

```json
{
  "firstName": "Wyller2",
  "lastName": "Fernandes2",
  "email": "wyller2@wyller.com",
  "phone": "419999999992"
}
```

### Exemplo de Response:

```
200 OK
```

```json
{
  "message": "User updated",
  "userdata": {
    "id": "0721c526-34d3-41ff-82b0-0a19394a146a",
    "firstName": "Wyller",
    "lastName": "Fernandes",
    "email": "wyller2@wyller.com",
    "phone": "41955555555",
    "created_at": "2022-11-28T14:00:49.671Z",
    "updated_at": "2022-11-29T11:51:39.021Z"
  }
}
```

### Possíveis Erros:

| Código do Erro | Descrição             |
| -------------- | --------------------- |
| 400 Conflict   | Supporters not found. |

---

### 3.4. **Deletar um apoiador por ID**

### `/supporters/:id`

_A deleção é do tipo softDelete_

### Exemplo de Request:

```
DELETE /supporters/9cda28c9-e540-4b2c-bf0c-c90006d37893
Authorization: Token e ser o dono do apoiador
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                                    |
| --------- | ------ | -------------------------------------------- |
| id        | string | Identificador único do apoiador (Supporters) |

### Corpo da Requisição:

```
vazio
```

### Exemplo de Response:

```
200 OK
```

### Possíveis Erros:

| Código do Erro | Descrição             |
| -------------- | --------------------- |
| 400 Conflict   | Supporters not found. |
