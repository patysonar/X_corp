import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTabPedido1630463059085 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Tab_pedido",
                columns: [
                    {name: "id", type:"integer", isPrimary:true,isGenerated: true, generationStrategy:"increment"},
                    {name: "cd_cliente", type: "integer", length: "15"},
                    {name: "dh_pedido", type: "timestamp"}, // Data (date) e hora (time)
                    {name: "vl_total", type: "numeric", precision: 8, scale: 2},
                ]         

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.doptable( "tab_pedido")  //DAO para dropar a tabela
    }

}
