
import {Request, Response} from 'express';
import {getCustomRepository} from "typeorm";
import { Cliente } from '../entities/Cliente';
import { ClienteTelefone } from '../entities/ClienteTelefone';

import (getConnection) from  "typeorm";

import {ClienteRepository}  from "../repositories/CadastroRepository";


class ClienteController{
    async create (req: Request, res:Response ){
       const {cpfCnpj, nome, endereco, telefones}= req.body;  // objeto que vai interagir com o BD
        var data = {cpfCnpj, nome, endereco, telefones};

        const repository = getCustomRepository(ClienteRepository);
        
         // agora pegar o registro data da desetruturação  
        data = await repository.svae(data);
      
        return res.status(201).json({ data:data });
    }

    async update (req: Request, res:Response ){
        const  {id} = req.params;  // objeto que vai interagir com o BD
        const {cpfCnpj, nome} = req.body;

        const cliente = {cpfCnpj, nome};
 
         const repository = getCustomRepository(ClienteRepository);
         await repository.update(id, cliente)
         
                 
         return res.status(200).json({ msg: "Cliente alterado para" + cliente.cpfCnpj });
     }

     async list (req: Request, res:Response ){
        const  repository = getCustomRepository(ClienteRepository);  // objeto que vai interagir com o BD
        const data =  await repository.find();
        return res.status(200).json({ data: data });
     }

     async find  (req: Request, res:Response ){
        const  {id} = req.params;  // objeto que vai interagir com o BD
        const repository = getCustomRepository(ClienteRepository);
        const data =  await repository.findOne(id);
        return res.status(200).json({ data: data });
     }

     async delete  (req: Request, res:Response ){
        const  {id} = req.params;  // objeto que vai interagir com o BD
        const repository = getCustomRepository(ClienteRepository);
        await repository.delete(id);
        return res.status(200).json({ msg: "Registro deletado" + id});
     }

     async addtel  (req: Request, res:Response ){
        const  {id} = req.params;  // objeto que vai interagir com o BD
        const {add,numero,tipo} = req.body;

        const repository = getCustomRepository(ClienteRepository);
        const cliente = await repository.findOne(id);

        const telefone = new ClienteTelefone();
        telefone.numero = numero;
        telefone.ddd = ddd;
        telefone.tipo = tipo;
        telefone.cliente = cliente;

        console.log(telefone);
        cliente.telefones.push(telefone);

        console.log(cliente);

        await repository.save(cliente);

        return res.status(200).json({ msg: "Telefone adicionado com sucesso"});


     }

     // realizando uma consulta com query builder tras casos relevantes
     async listCity(req: Request, res: Response){
         const {nome}= req.params;

         const data = await getConnection()
         .getRespository(Cliente)
         .createQueryBuilder("Cliente").innerJoin("cliente.endereco", "endereco")
         .where ("endereco.cidade = :nome",{nome: nome})
         .getMany();

         return res.status(200).json({ data:data});

     }

}



export {ClienteController}


