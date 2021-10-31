// MVC usa o controleler para não sobrecarregar em um lugar só

import {Request, Response} from 'express';
import{getCustomRepository} from "typeorm";


import  {CadastroRepository}  from "../repositories/CadastroRepository";

export default{
    async create (req: Request, res:Response ){
       
        const {nome, cpf}= req.body;  // objeto que vai interagir com o BD
        var data = {cpf, nome};

        const repository = getCustomRepository(CadastroRepository);
        
         // agora pegar o registro data da desetruturação  
        data = await repository.save(data);
      
        return res.status(201).json({ data:data });
    },

    // Metodo List
    async list (req: Request, res:Response ){

        const repository = getCustomRepository(CadastroRepository); // vai pegar do cadastro e vai ser o repositorio
        const data = await repository.find(); //Aqui pega os dados usando o find passando o proprio objeto como parametro

        return res.status(200).json({ data:data});   // Finda dá um select na base.


    },

    //Metodo de consulta -  interagindo com o BD - Buscar objeto para retornar com o ID ->  consulta
    async find( req: Request, res: Response ){ // este metodo foi criado depois de tudo 

        const {id} = req.params; // pega o id na tabela de cadastro e busca pelo seu id  // tem que ir na rota configurar com get.
        
        const repository = getCustomRepository(CadastroRepository);
        const cadastro = await repository.findOne(id); // Para consultar pelo id

        return res.status(200).json(cadastro);
    },

    async update (req: Request, res:Response ){
        
        const { id } = req.params;
        const {nome, cpf} = req.body;
        const data = {cpf,nome};

        const repository = getCustomRepository(CadastroRepository);
        await repository.update(id, data); // Para atualizar vai usar o id

        return res.status(200).json({ data: "Cadastro atualizado com sucesso"});
    },

    // Metodo já interagindo com o BD
    async delete(req: Request, res:Response ){
        const { id } = req.params;

        const repository = getCustomRepository(CadastroRepository);
        await repository.delete(id); // Para atualizar vai usar o id

        return res.status(200).json({ message: "Registro excluido com sucesso!"});
    }
}



