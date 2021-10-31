import {Entity, PrimaryGeneratedColumn, Column,createDateColumn, updateDateColumn, BaseEntity} from "typeorm";
import { Endereco } from "./Endereco";

@Entity("tab_cliente")
export class Cliente extends BaseEntity{

    @PrimaryGeneratedColumn()  // primary com auto incremento
    id: number;

    @Column({name:"cpf_cnpj"})
    cpfCnpj: string;

    @Column()
    nome: string;

    @Column()
    ativo: boolean;

    // Quando salvar o cliente salvar o endereço.

    @OneToOne (() => Endereco, {cascade: true, eager: true})
    @JoinColumn({ name: "cd_endereco"})
    endereco: Endereco;


    @OneToMany(() => ClienteTelefone, tel => tel.cliente,  // muitos telefones ou varios
    {cascade: true. eager: true})
    telefones : ClienteTelefone[];


    @createDateColumn({name: "dt_inclusao"})
    dataInclusao: Date;  // o framework gerencia as alterações de data

    @updateDateColumn({name: "dt_alteracao"})
    dataAlteração: Date;



}
