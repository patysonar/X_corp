
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTabProduto1630462019435 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: "Tab_produto",
                columns: [
                    {name: "id", type:"integer", isPrimary:true,isGenerated: true, generationStrategy:"increment"},
                    {name: "cd_barras", type: "varchar", length: "15"},
                    {name: "nome", type: "varchar",lenght: "50"}, // Data (date) e hora (time)
                    {name: "vl_unit", type: "numeric", precision: 8, scale: 2},
                ]         

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.doptable( "tab_produto")  //DAO para dropar a tabela
    }

}
