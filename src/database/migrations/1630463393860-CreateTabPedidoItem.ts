import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTabPedidoItem1630463393860 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Tab_pedido_item",
                columns: [
                    {name: "id", type:"integer", isPrimary:true,isGenerated: true, generationStrategy:"increment"},
                    {name: "cd_produto", type: "integer", length: "5"},
                    {name: "quant", type: "numeric", precision: 8, scale: 2},
                    {name: "vl_unit", type: "numeric", precision: 8, scale: 2},
                    {name: "vl_total", type: "numeric", precision: 8, scale: 2},
                    {name: "cd_pedido", type: "integer", length: "5"}, // Data (date) e hora (time)
                    
                ]         

            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.doptable( "tab_pedido_item")  //DAO para dropar a tabela
    }

}
