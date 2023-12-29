import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Test {

  @PrimaryGeneratedColumn()
  tableId: number;

  @Column()
  table: string;

  @Column()
  column: string;
}
// const test = new Test()
// async function  TestRepository(){
//     test.table = "table1"
//     test.column = "column1"
//     await this.test.save()
// }
// TestRepository()
// const test = [
//     new Test({ table: "John Doe", column: "johndoe@example.com" }),
//     new Test({ table: "Jane Doe", column: "janedoe@example.com" }),
//   ];
  
//   await TestRepository.save(test);