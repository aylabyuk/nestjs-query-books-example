import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Book } from '../book/book.entity'

@ObjectType()
@Entity()
export class Author extends BaseEntity {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column('varchar')
  email!: string

  @Field()
  @Column('varchar')
  firstName!: string

  @Field()
  @Column('varchar')
  lastName!: string

  @Field()
  @Column('varchar', { name: 'mobile' })
  phone!: string

  @Field(type => [Book])
  @OneToMany(
    type => Book,
    book => book.author
  )
  books!: Book[]

  @Field()
  @CreateDateColumn()
  createdAt!: Date

  @Field()
  @UpdateDateColumn()
  updatedAt!: Date
}
