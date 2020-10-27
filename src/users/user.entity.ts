import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    ID: number;

    @Column({ length: 50 })
    Name:string;

    @Column({length: 100}) 
    Email:string;
}
