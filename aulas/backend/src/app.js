const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

/**
 * Rota / Recurso
 */

 /**
 * Metodos HTTP:
 * 
 * GET: Buscar/listar uma informacao do backend
 * POST: Criar uma informacao no backend
 * GET: Alterar uma informacao no backend
 * DELETE: Deletar uma informacao no backend
 */

/**
 * Tipos de parametros:
 * 
 * Query Params: Parämetros nomeados enviados na rota "?" (filtros, paginacao)
 *    Como acessar:     
 *      app.get('/users', (request, response) => {          
 *          const params = request.query;
 *          console.log(params);
 *
 * Route Params: Parametros utilizados para identificar recursos
 *    Como acessar:     
 *      app.get('/users/:id', (request, response) => {          
 *          const params = request.params;
 *          console.log(params);
 *
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos 
 *    Como acessar:
 *      app.use(express.json());
 *      app.post('/users', (request, response) => {
 *          const body = request.body;
 *          console.log(body);
 */

 /**
  * SQL: MySQL, SQLLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */
app.use(routes);
app.use(errors());

module.exports = app;
