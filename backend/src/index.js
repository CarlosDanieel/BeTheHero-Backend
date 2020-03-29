const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 *Rotas | Recursos
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar informações do Backend
 * POST: Criar uma informação no Backend
 * PUT: Alterar
 * DELETE: Deletar
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados e enviados na rota após "?" (Filtros, paginação)
  * Rote Params: Parâmetros utilizados para identificar recursos ":id"
  * Request Body: Corpo da requisição, utilizado para alterar ou criar recursos
  */

  /**
   * SQL, MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server;
   * NoSQL, MongoDB, CouchDB, etc.
   */

   /**
    * Drive: SELECT * FROM Users;
    * Query Build: table('Users').select('*').where()
    */

app.listen(3333);