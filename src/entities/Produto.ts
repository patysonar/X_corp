import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import { Endereco } from "./Endereco";

@Entity("tab_produto")
export class Produto extends BaseEntity{

    @PrimaryGeneratedColumn()  // primary com auto incremento
    id: number;

    @Column({name:"cd_barras"})
    codigoBarras: string;

    @Column({name: "nome"})
    nome: string;

    @Column({name: "vl_unit"})
    valorUnitario: number;

}