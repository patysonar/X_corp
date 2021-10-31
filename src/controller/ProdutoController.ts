import {request, Request, Response} from 'express';
import {getCustomRepository} from "typeorm";
import { ProdutoRepository } from '../repositories/ProdutoRespository';

//import (getConnection) from  "typeorm";

//import {ClienteRepository}  from "../repositories/CadastroRepository";


export class ProdutoController{
    async create (request: Request, response : Response){
    const { codigoBarras, nome, valorUnitario} = request.body;
    const repository = getCustomRepository(ProdutoRepository);

    var produto = { codigoBarras, nome, valorUnitario};
    
    produto = await repository.save(produto);
    return response.status(200).json(produto);

    }
    async list (request: Request, response : Response){
        const repository = getCustomRepository(ProdutoRepository);

        const data = await repository.find();
        return response.status(200).json({ data:data})
    }

    async find (req: Request, res: Response){
        const {id} = req.params;
        const repository = getCustomRepository(ProdutoRepository);

        const data = await repository.findOne(id);
        return res.status(200).json({ data:data});
    }


}