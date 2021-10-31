import {Entity, PrimaryGeneratedColumn, Column,BaseEntity, ManyToOne, JoinColumn} from "typeorm";
import {Cliente} from "./Cliente";
import {TelefoneTipo} from "./TelefoneTipo";


@Entity("tab_cliente_telefone")
export class ClienteTelefone extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ddd: number;

    @Column()
    numero: number;

    @Column({
        type: "enum",
        enum: TelefoneTipo,
        name: "tipo"
    })
    tipo: TelefoneTipo;

    @ManyToOne(() => Cliente, cliente => cliente.telefones)
    @JoinColumn({name: "cd_cliente"})
    cliente:Cliente;
}
