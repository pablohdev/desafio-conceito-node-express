
<div align="center">

# :rocket: GoStack - Desafio 1 - Conceitos do Node.js


[![NODE](https://img.shields.io/badge/node-10.16.0-green.svg)](https://nodejs.org/en/)  [![NPM](https://img.shields.io/badge/npm-6.14.5-green.svg)](https://nodejs.org/en/) [![YARN](https://img.shields.io/badge/yarn-1.19.0-blue.svg)](https://yarnpkg.com/) [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)  [![JEST](https://img.shields.io/badge/jest-25.2.6-purple.svg)](https://nodejs.org/en/)



Primeiro desafio de Node.JS  do Bootcamp GoStack da RocketSeat.

Neste desafio tivemos que desenvolver o back-end em node para cadastrar uma lista de repositórios, dando a possibilidade de armazenar 'likes' em cada repositório.

</div>



___
##  :pick: O que usamos

   |   | Dependencias | 
   |---|---|
   | :heavy_check_mark:  | Express |
   | :heavy_check_mark:  | Jest  |
   | :heavy_check_mark:  | Cors  |
   | :heavy_check_mark:  | uuidv4  |
   | :heavy_check_mark:  | nodemon  |
   | :heavy_check_mark:  | supertest  |
___


## Instalação

Clone o repositorio e execute o comando abaixo para instalar as dependencias.


```sh
   yarn
```

ou 


```sh
    npm install
```

##  :bus: Rotas 



   |Método |Rota                     |    | 
   |---    |---                      | ---|
   | GET   | /repositories/          | Lista todos os repositórios|
   | POST  | /repositories/          | Insere um repositório|
   | PUT   | /repositories/:id       | Edita um repositório|
   | DELETE| /repositories/:id       | Remove um repositório|
   | POST  | /repositories/:id/like  | Dá like em um repositório|
   



## :satisfied: Obrigado 

Created ♥ by [Pablo Henrique](https://linkedin.com/in/pablohdev)
