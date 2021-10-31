import { Router } from 'express';
import { ClienteController } from './controller/ClienteController';
import { ProdutoController } from './controller/ProdutoController';

import from  CadastroController from './Controller/CadastroController';
import from  {ClienteController}  from './Controller/ClienteController';


const routes = Router();

routes.post('/cadastros', CadastroController.create);   // http://localhost:3000/cadastros

// **** Quando começa interagir com o BD o update mudou para pegar o ID.
//routes.put('/cadastros', CadastroController.update);   // http://localhost:3000/cadastros
routes.put('/cadastros/:id', CadastroController.update);   // http://localhost:3000/cadastros
routes.get('/cadastros', CadastroController.list);   // http://localhost:3000/cadastros
routes.get('/cadastros/:id', CadastroController.find);   // http://localhost:3000/cadastros/id(numero do id)     ---->>> Buscar do find do cadastro controller.
routes.delete('/cadastros/:id', CadastroController.delete);   // http://localhost:3000/cadastros/id

const clienteController = new ClienteController();
routes.get('/clientes', ClienteController.list);
routes.get('/clientes:id', ClienteController.find);
routes.get('/clientes/cidades/:nome', ClienteController.listCity);  // listar clientes exemplo da cidade da Bahia ou SP

routes.post('/clientes', ClienteController.create);
routes.put('/clientes/:id', ClienteController.update);
routes.delete('/clientes/:id', ClienteController.delete);
routes.post('/clientes/:id/telefones', ClienteController.addTel);


const produtoController = new ProdutoController();

routes.post('/produtos', produtoController.create);
routes.get('/produtos', produtoController.list);
routes.get('/produtos/:id', produtoController.find);


const pedidoController = new PedidoController();

routes.post('/pedidos', pedidoController.create);
routes.get('/pedidos', pedidoController.list);
routes.get('/pedidos/grid/:nome', pedidoController.view);
routes.get('/pedidos/:id', pedidoController.find);



export default routes;








//Obs; precisa insalar a sdepencias neste exercicio
// Yarn, TS, "Knexjs.org"
//yarn add mysql2 também instalar
// Não consegui quando estava estudando
