# Sistema de Venda de Ingressos - Front-End

Este projeto foi desenvolvido com fins de estudo e tem como objetivo ser apresentado no congresso da universidade FEPI de Itajubá, MG.

## Executando com Docker

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- Docker
- Docker Compose

### Passos para execução
1. Abra o terminal no diretório do projeto.
2. Execute o comando:
    ```
    docker-compose up -d
    ```

O sistema estará disponível em: [http://localhost:8080](http://localhost:8080)

### Parando o container
Para parar o container, execute:
```
docker-compose down
```

## Executando com Node.js

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- Node.js (versão 18.x)
- NPM (versão 10.5.0)

### Passos para execução
1. Abra o terminal no diretório do projeto.
2. Instale as dependências do projeto com:
    ```
    npm install
    ```
3. Inicie o servidor com:
    ```
    npm run serve
    ```

O sistema estará disponível em: [http://localhost:8080](http://localhost:8080)