import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Book } from "../book/book.entity";

@ObjectType()
@Entity()
export class Publisher extends BaseEntity {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column("varchar")
  name!: string;

  @Field()
  @Column("varchar")
  address!: string;

  @Field(type => [Book], { nullable: true })
  @OneToMany(
    type => Book,
    book => book.publisher
  )
  books!: Book[];
}
