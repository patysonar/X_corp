import {Entity, PrimaryGeneratedColumn, Column, BaseEntity,OneToMany} from "typeorm";

import { PedidoItem } from "./PedidoItem";

@Entity("tab_pedido")

export class Produto extends BaseEntity{

    @PrimaryGeneratedColumn()  // primary com auto incremento
    id: number;

    @Column({name:"cd_cliente"})
    cliente: number;

    @Column({name: "dh_pedido"})
    dataHora: Date;

    @Column({name: "vl_total"})
    valorTotal: number;

    @OneToMany(() => PedidoItem , item => item.pedido,
    {cascade: true, eager: true})
    itens: PedidoItem[];


}