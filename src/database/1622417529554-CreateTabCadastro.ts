
import { MigrationInterface, QueryRunner } from "typeorm";

// estrutura para criação das tabelas

export class CreateTabCadastro1622417529554 implements MigrationInterface{

        public async up(queryRunner: QueryRunner): Promise<void>{
            await queryRunner.createTable(
                new Table ({
                    name: "tab_cadastro",
                    colums: [
                        {name: "id", type:"integer", isPrimary:true,isGenerated: true, generationStrategy:"increment"},
                        {name: "cpf", type: "varchar", length: "15"},
                        {name: "nome", type: "varchar", length: "50"}


                        
                    ]


                })
            )

        }


        public async down(queryRunner: QueryRunner):Promise<void>{
            await queryRunner.dropTable("tab_cadastro")
        }
    }

// obs: este arquivo foi criado forçado da aula
// ele deve ser criado atarvés do comado do migrate
// para subir a aplicação é yarn dev no console
// Precisa usar comandos para executar as instruções no BD
// comando yarn knex migrate:latest
// Vai no Bd e olha a estrutura criada no BD.(Migratio e a tabela cadastro sem a informação)
// para criar usando  typeorm->>>   typeorm migration:create -n  CreateTabCadastro


// para rodar a migration na base de dados usa o comando: yarn typeorm migration:run