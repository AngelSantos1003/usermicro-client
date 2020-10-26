import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column({ length: 25 })
    Name:string;

    @Column({length: 50}) 
    Email:string;
}
