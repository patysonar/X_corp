import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTabCliente1630455043194 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
        //Esta estrutura determina toda DDL
            new Table ({
                name: "tab_cliente",
                columns: [
                    {name: "id", type:"integer", isPrimary:true,isGenerated: true, generationStrategy:"increment"},
                    {name: "cpf_cnpj", type: "varchar", length: "15",  isNullable: false},
                    {name: "nome", type: "varchar", length: "50",  isNullable: false},
                    {name: "ativo", type: "boolean", default : true, isNullable: false },
                    {name: "dt_inclusao", type: "timestamp", default : "now()"}, // Data (date) e hora (time)
                    {name: "dt_alteracao", type: "timestamp", default : "now()"},
                    {name: "cd_endereco", type: "integer", length: "5"}, //primarykey de endereço codigo do endereço
                    
                ]


            })
        
       )
      // para manter a integridade.
      await queryRunner.createForeignkey("ta_cliente", new TableForeignKey({
        columnNames : ["cd_endereco"],
        referencedColumnNames: ["id"],
        referencedTableNames: "tab_endereco", 
        name : "fk_cliente_endereco"        
    
 }));

}



    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.doptable( "tab_cliente")  //DAO para dropar a tabela
    }

}
