### Desafio Técnico Full Stack
Esse projeto consiste em um sistema capaz capaz de auxiliar as pessoas colaboradoras a se organizar e ter mais produtividade.
<br>
## Requisitos Técnicos

- Front-End em **React**;
- Back-End em **NodeJS**, com **MySQL**;
- Arquitetura em **camadas**;
<br>

## Funcionalidades desenvolvidas
- Visualizar a lista de tarefas;
- Inserir uma nova tarefa na lista;
- Remover uma tarefa da lista;
- Atualizar uma tarefa da lista;
<br>

## Rodando o projeto localmente
Antes de mais nada você precisa clonar o repositório ou baixar todos os arquivos para sua máquina.

### Com Docker
Se você possui o docker e docker-compose instalado na sua máquina, basta rodar o comando: 
`docker-compose up`

### Sem Docker
Se você não possui o Docker instalado, você precisa está com o MySQL funcionando na sua máquina.

- Entre na pasta `/backend` e rode o comando `npm start`
- Copie o script `db.sql` e execute o código no seu MySQL para criar o Banco de Dados.
- Entre na pasta `./frontend` e execute o comando `npm start`
