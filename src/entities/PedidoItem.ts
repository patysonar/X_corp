import {Entity, PrimaryGeneratedColumn, Column, BaseEntity,OneToMany, JoinColumn} from "typeorm";

import { Pedido } from "./Pedido";

@Entity("tab_pedido_Item")

export class PedidoItem extends BaseEntity{

    @PrimaryGeneratedColumn()  // primary com auto incremento
    id: number;

    @Column({name:"cd_produto"})
    produto: number;

    @Column({name: "dquant"})
    quantidade: number;

    @Column({name: "vl_unit"})
    valorUnitario: number;

    @Column({name: "vl_total"})
    subTotal: number;

    @OneToMany(() => Pedido , pedido => pedido.itens)
    @JoinColumn({name : "cd_pedido"})
    pedido : Pedido;


}