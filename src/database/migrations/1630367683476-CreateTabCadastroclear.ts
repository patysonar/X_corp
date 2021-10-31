import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTabCadastroclear1630367683476 implements MigrationInterface {
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

