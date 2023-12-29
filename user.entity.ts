import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    firstname: String

    @Column()
    lastname: String

    @Column({default:true})
    isActive: boolean
}