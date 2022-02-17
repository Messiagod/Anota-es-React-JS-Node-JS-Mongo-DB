const express = require ('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');

/* Rota Annotations */
routes.post('/annotations', AnnotationController.Create);
routes.get('/annotations', AnnotationController.Read);
routes.delete('/annotations/:id',AnnotationController.Delete )/* passando parametro ID , para saber qual utilizar */

module.exports = routes;
