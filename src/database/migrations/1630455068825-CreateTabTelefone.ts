import { table } from "console";
import {MigrationInterface, QueryRunner, Table,TableForeignKey} from "typeorm";

export class CreateTabTelefone1630455068825 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({

                name: "tab_cliente_telefone",
                columns:[
                    {name: "id", type: "integer", isPrimary:true , isGenerated: true,generationStrategy:"increment"},
                    {name: "cd_cliente", type: "integer", lenght: "5"}, // codigo do telefone do cliente
                    {name: "tipo", type: "integer", lenght: "10"},
                    {name: "ddd", type: "integer", lenght: "3"},
                    {name: "numero", type: "integer", lenght: "10"},
                ]

            })
        )
// para manter a integridade.
    await queryRunner.createForeignkey("ta_cliente_telefone", new TableForeignKey({
        columnNames : ["cd_cliente"],
        referencedColumnNames: ["id"],
        referencedTableNames: "tab_cliente", 
        name : "fk_telefone_cliente"        

    }));

    }




    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.doptable( "tab_cliente_telefone")  //DAO para dropar a tabela
    }

}
