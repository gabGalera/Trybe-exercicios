const bodyParser = require('body-parser');
const express = require('express');
const account = require('./controllers/account.controller');
const comment = require('./controllers/comment.controller');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/account/:id', account.getById);

app.get('/account/:id/comments', comment.getCommentByAccountId);

app.get('/account-v2/:id', account.getByIdV2);

/** 
 * Substitua este comentário pelas suas rotas!
*/

module.exports = app;
