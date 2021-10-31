import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("tab_cadastro")
export class Cadastro {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
