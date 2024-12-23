# Projeto de Desenvolvimento de Funcionalidades

Este repositório contém o código-fonte para um sistema de funcionalidades e atividades com diferentes tipos de usuários, como MC's, representantes de batalhas, e administradores. As funcionalidades incluem ações como o cadastro de usuários, gerenciamento de batalhas e eventos, além de permitir interações entre os diferentes tipos de usuários do sistema.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Node.js (versão 22.12.0)**: Ambiente de execução JavaScript do lado do servidor. O Node.js permite que você execute código JavaScript fora de um navegador, facilitando a construção de aplicações back-end e serviços web.
  
- **Docker (versão 27.4.1)**: Plataforma de contêineres que permite empacotar e distribuir aplicações e seus ambientes. O Docker facilita a criação, implementação e execução de aplicações em contêineres.

- **PostgreSQL (latest)**: Sistema de gerenciamento de banco de dados relacional, usado para armazenar e gerenciar dados de forma segura e eficiente.

## Como Rodar o Projeto

Para rodar este projeto utilizando Docker, siga os seguintes passos:

1. Clone este repositório para o seu ambiente local.

```bash
git clone <URL do repositório>
```

2. Navegue até a pasta do repositório
```bash
cd <nome_do_repositorio>
```

3. Para rodar o projeto, utilize o comando
```bash
docker-compose up --build
```

4. Para fechar o projeto, utilize o comando
```bash
docker-compose down
```