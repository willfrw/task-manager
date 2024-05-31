# Task Manager API

Esta API é obra de um trabalho avaliativo da disciplina de Tópicos Especiais em Ads do curso de Análise e Desenvolvimento de Sistemas pela UNILASALLE.

Uma API RESTful para gerenciar tarefas, utilizando MongoDB como banco de dados. A API suporta operações de CRUD (Criar, Ler, Atualizar, Excluir) e inclui validação de dados com JSON Schema. Além disso, uma interface de dashboard exibe um gráfico baseado nos dados do banco utilizando Chart.js.

## Requisitos

Para utilizar e executar este projeto, você precisará ter os seguintes softwares instalados:

- Node.js (versão 12 ou superior)
- MongoDB (em execução local ou em uma instância acessível)

## Instalação

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/seu-usuario/task-manager.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd task-manager-api
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente:
   ```plaintext
   MONGODB_URL=mongodb://localhost:27017/tasksdb
   PORT=3000
   ```

## Utilização

### Executar a API

Para iniciar a API, execute o seguinte comando:
```bash
node server.js
```

A API estará disponível em `http://localhost:3000`.

### Endpoints da API

#### 1. Adicionar Tarefa
- **URL:** `/tasks`
- **Método:** `POST`
- **Corpo da Requisição:**
  ```json
  {
    "title": "Nome da Tarefa",
    "status": "pending",
    "subTasks": [
      {
        "title": "Subtarefa 1"
      },
      {
        "title": "Subtarefa 2"
      }
    ]
  }
  ```
- **Resposta de Sucesso:** `201 Created`
- **Resposta de Erro:** `400 Bad Request` (caso os dados sejam inválidos)

#### 2. Editar Tarefa
- **URL:** `/tasks/:id`
- **Método:** `PUT`
- **Corpo da Requisição:**
  ```json
  {
    "title": "Nome da Tarefa Atualizado",
    "status": "completed"
  }
  ```
- **Resposta de Sucesso:** `200 OK`
- **Resposta de Erro:** `400 Bad Request` (caso os dados sejam inválidos), `404 Not Found` (caso a tarefa não seja encontrada)

#### 3. Excluir Tarefa
- **URL:** `/tasks/:id`
- **Método:** `DELETE`
- **Resposta de Sucesso:** `204 No Content`
- **Resposta de Erro:** `404 Not Found` (caso a tarefa não seja encontrada)

#### 4. Consultar Tarefa Individualmente
- **URL:** `/tasks/:id`
- **Método:** `GET`
- **Resposta de Sucesso:** `200 OK`
- **Resposta de Erro:** `404 Not Found` (caso a tarefa não seja encontrada)

#### 5. Consultar Grupo de Tarefas
- **URL:** `/tasks`
- **Método:** `GET`
- **Resposta de Sucesso:** `200 OK`

### Dashboard

Acesse `http://localhost:3000` no seu navegador para visualizar o dashboard que exibe um gráfico das tarefas.

## Estrutura do Projeto

- `controllers/`: Contém os controladores que manipulam as requisições e respostas.
- `models/`: Contém os modelos de dados Mongoose.
- `routes/`: Contém as definições de rotas.
- `middlewares/`: Contém os middlewares para validação de dados.
- `views/`: Contém o arquivo HTML para o dashboard.
- `app.js`: Arquivo principal da aplicação Express.
- `server.js`: Inicializa o servidor e configura as variáveis de ambiente.

## Créditos

- [Código exemplo do professor](https://replit.com/@faustovanin/Express-API-Example#index.js)
- [Vídeo recomendado pelo professor](https://www.youtube.com/watch?v=Cdu0WJhI-d8)
- ChatGPT para ajustes e correções do código, adaptação para banco de dados NoSQL usando MongoDB