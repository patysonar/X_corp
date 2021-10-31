import {Request, response, Response} from "express";
import  {getCustomRepository} from "typeorm";
import { PedidoView } from "../entities/PedidoView";
import { PedidoRepository } from "../repositories/PedidoRepository";

//import {PedidoView} from "../entities/PedidoView";
/** Quando criar a view do pedido habilita este import **/

import (getConnection) from "typeorm";

export class PedidoController{

    async create (request: Request, responde: Response){
        const {cliente, dataHora, valorTotal, itens}= request.body;
        const repository = getCustomRepository(PedidoRepository);


        var pedido = {cliente, dataHora, valorTotal, itens};

        console.log(pedido);

        pedido = await repository.save(pedido);
        return response.status(200).json(pedido);
    }
    async list (re: Request, res: Response){
        const repository = getCustomRepository(PedidoRepository);

        const data = await  repository.find();
        return res.status(200).json({ data: data});
    }
    async find(req: Request, res: Response){
        return res.status(200).json({data: "precisa implementar"});
    }

    async view (req: Request, res: Response){
        const {nome} = req.params;

        const data = await getConnection()
        .getRepository(PedidoView)
        .createQueryBuilder("pedidos")
        .where("pedidos.nome = :nome", {nome : nome})
        .getMany();

        return res.status(200).json({data: data});
    }    
}



/* 
Para criar a View no BD -> 
CREATE VIEW vw_pedido as
SELECT p.*, c.cpf_cnpj, c.nome  from tab_pedido p inner join tab_cliente c on c.id = p.cd_cliente

*/